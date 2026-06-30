import { timingSafeEqual } from 'node:crypto'

const isMatchingCredential = (actual: string | undefined, expected: string) => {
  if (!actual) {
    return false
  }

  const actualBuffer = Buffer.from(actual)
  const expectedBuffer = Buffer.from(expected)

  return actualBuffer.length === expectedBuffer.length
    && timingSafeEqual(actualBuffer, expectedBuffer)
}

export default defineEventHandler((event) => {
  if (!import.meta.dev) {
    return
  }

  const config = useRuntimeConfig(event)
  const expectedAuthorization = `Basic ${Buffer.from(
    `${config.basicAuthUser}:${config.basicAuthPassword}`
  ).toString('base64')}`

  if (isMatchingCredential(getHeader(event, 'authorization'), expectedAuthorization)) {
    return
  }

  setResponseHeader(event, 'WWW-Authenticate', 'Basic realm="Induva DEV", charset="UTF-8"')

  throw createError({
    statusCode: 401,
    statusMessage: 'Authentication required'
  })
})
