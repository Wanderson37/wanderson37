import Dexie, { type EntityTable } from 'dexie'

type Checkin = { id?: number; kind: 'in' | 'out'; at: string; synced: 0 | 1 }

// `synced` is 0 or 1 because IndexedDB cannot index booleans.
const db = new Dexie('field') as Dexie & { checkins: EntityTable<Checkin, 'id'> }
db.version(1).stores({ checkins: '++id, synced' })

// Save on the device first: the action never waits for a signal.
export async function record(kind: Checkin['kind']) {
  await db.checkins.add({ kind, at: new Date().toISOString(), synced: 0 })
  if (navigator.onLine) void syncPending()
}

let syncing = false

// Send what is still pending, oldest first. Stop at the first failure.
export async function syncPending() {
  if (syncing) return
  syncing = true
  try {
    for (const entry of await db.checkins.where('synced').equals(0).sortBy('id')) {
      const body = JSON.stringify(entry)
      const res = await fetch('/api/checkins', { method: 'POST', body })
      if (!res.ok) break
      await db.checkins.update(entry.id!, { synced: 1 })
    }
  } finally {
    syncing = false
  }
}

window.addEventListener('online', syncPending)
