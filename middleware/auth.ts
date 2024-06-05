export default defineNuxtRouteMiddleware((_to, _from) => {
  if (isAuthenticated() === false) {
    console.warn('Not authenticated')
    return navigateTo('/home')
  }

  console.warn('Authenticated')

})

const isAuthenticated = (): boolean => {
  // TODO: Check token
  return true
}