export const useEventListener = (trigger, eventName, fn) => {
  trigger.on(eventName, fn)

  onUnmounted(() => {
    trigger.un(eventName, fn)
  })
}
