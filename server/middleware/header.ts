import { defineEventHandler, H3Event } from 'h3'

export default defineEventHandler((event: H3Event) => {
  // Menambahkan header X-Content-Type-Options
  event.node.res.setHeader('X-Content-Type-Options', 'nosniff')
})
