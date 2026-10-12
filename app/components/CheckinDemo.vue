<script setup lang="ts">
import type { CheckinStatus } from '~/data/types'

// A simulation of the offline-first pattern: no network and no storage. The
// server render shows a fixed example (one entry synced, one waiting), and the
// controls only turn on once the page is interactive.

type Kind = 'in' | 'out'
interface Entry {
  id: number
  time: string
  kind: Kind
  status: CheckinStatus
}

const t = useSiteContent()
const d = computed(() => t.value.work.featured.demo)
const { locale } = useI18n()

const ready = ref(false)
const online = ref(false)
const next = ref<Kind>('in')
const announcement = ref('')
const entries = ref<Entry[]>([
  { id: 1, time: '07:58', kind: 'in', status: 'synced' },
  { id: 2, time: '12:04', kind: 'out', status: 'queued' }
])

const timers = new Set<ReturnType<typeof setTimeout>>()
let reducedMotion = false

onMounted(() => {
  reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  ready.value = true
})
onBeforeUnmount(() => timers.forEach(clearTimeout))

function later(fn: () => void, ms: number) {
  const id = setTimeout(() => {
    timers.delete(id)
    fn()
  }, reducedMotion ? 0 : ms)
  timers.add(id)
}

function announce(message: string) {
  announcement.value = ''
  later(() => (announcement.value = message), 50)
}

// The fake network: each pending entry "uploads" after a short delay.
function syncPending() {
  const pending = entries.value.filter((e) => e.status === 'queued')
  pending.forEach((entry, i) => {
    entry.status = 'syncing'
    later(() => {
      entry.status = 'synced'
      if (i === pending.length - 1) announce(d.value.announceSynced)
    }, 500 * (i + 1))
  })
}

function setOnline(value: boolean) {
  if (online.value === value) return
  online.value = value
  if (value) syncPending()
}

function record() {
  const time = new Date().toLocaleTimeString(locale.value === 'pt' ? 'pt-BR' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit'
  })
  const entry: Entry = { id: Date.now(), time, kind: next.value, status: 'queued' }
  entries.value = [...entries.value, entry].slice(-4)
  next.value = next.value === 'in' ? 'out' : 'in'

  if (online.value) {
    syncPending()
  } else {
    announce(d.value.announceSaved)
  }
}
</script>

<template>
  <section class="demo" :class="{ 'is-offline': !online }" aria-labelledby="demo-title">
    <div class="demo__head">
      <p id="demo-title" class="demo__title">{{ d.title }}</p>
      <p class="demo__tag">{{ d.tag }}</p>
    </div>

    <div class="demo__body">
      <div class="demo__conn" role="group" :aria-label="d.connection">
        <button type="button" :aria-pressed="online" :disabled="!ready" @click="setOnline(true)">
          {{ d.online }}
        </button>
        <button type="button" :aria-pressed="!online" :disabled="!ready" @click="setOnline(false)">
          {{ d.offline }}
        </button>
      </div>

      <p class="demo__status">
        <span class="demo__dot" aria-hidden="true" />
        {{ online ? d.statusOnline : d.statusOffline }}
      </p>

      <button type="button" class="btn btn--primary demo__action" :disabled="!ready" @click="record">
        {{ next === 'in' ? d.checkIn : d.checkOut }}
      </button>
    </div>

    <ul class="demo__log" :aria-label="d.activity">
      <li v-for="entry in entries" :key="entry.id">
        <time>{{ entry.time }}</time>
        <span>{{ entry.kind === 'in' ? d.kinds.in : d.kinds.out }}</span>
        <StatusBadge :status="entry.status" :label="d.states[entry.status]" />
      </li>
    </ul>

    <p class="demo__hint">{{ online ? d.hintOnline : d.hintOffline }}</p>
    <!-- Not a <noscript>: its content would be text on the client and break hydration. -->
    <p class="demo__hint no-scripting-only">{{ d.noJs }}</p>
    <p class="visually-hidden" aria-live="polite">{{ announcement }}</p>
  </section>
</template>

<style scoped>
.demo {
  border: 1px solid var(--graphite);
  border-top: 5px solid var(--synced);
  border-radius: 6px;
  transition: border-color 0.25s;
}

.demo.is-offline {
  border-top-color: var(--signal);
}

.demo__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding: 14px 18px 0;
}

.demo__title {
  font-weight: 700;
  font-stretch: var(--wide);
}

.demo__tag {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--graphite);
}

.demo__body {
  display: grid;
  gap: 12px;
  justify-items: start;
  padding: 14px 18px 0;
}

.demo__conn {
  display: inline-flex;
  border: 1.5px solid var(--ink);
  border-radius: var(--radius);
  overflow: hidden;
}

.demo__conn button {
  min-height: 40px;
  padding: 6px 16px;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

.demo__conn button[aria-pressed='true'] {
  background: var(--ink);
  color: var(--paper);
}

.demo__conn button:focus-visible {
  outline-color: var(--signal);
  outline-offset: -5px;
}

.demo__status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9375rem;
  color: var(--graphite);
}

.demo__dot {
  flex: none;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--synced);
}

.is-offline .demo__dot {
  background: transparent;
  box-shadow: inset 0 0 0 2px var(--signal);
}

.demo__action {
  width: 100%;
}

button:disabled {
  cursor: default;
  opacity: 0.55;
}

.demo__log {
  margin-top: 16px;
  padding: 0 18px;
  list-style: none;
}

.demo__log li {
  display: grid;
  grid-template-columns: 3.25rem minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
  padding-block: 10px;
  border-top: 1px solid var(--rule);
}

.demo__log time {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: 0.8125rem;
  color: var(--graphite);
  font-variant-numeric: tabular-nums;
}

.demo__hint {
  padding: 12px 18px 14px;
  border-top: 1px solid var(--rule);
  font-size: 0.875rem;
  color: var(--graphite);
}
</style>
