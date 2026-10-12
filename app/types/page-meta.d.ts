declare module '#app' {
  interface PageMeta {
    /** Keep this page in the light theme whatever the visitor picked (the CV). */
    themeLock?: boolean
  }
}

export {}
