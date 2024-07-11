var PiniaDebounce =
  (debounce) =>
  ({ options, store }) => {
    const { debounce: debounceOptions, actions } = options
    if (debounceOptions) {
      let _store = Object.keys(actions).reduce((debouncedActions, action) => {
        const args = [store[action]].concat(debounceOptions)
        debouncedActions[action] = debounce.apply(null, args)
        return debouncedActions
      }, {})

      return _store
    }
  }
export { PiniaDebounce }
