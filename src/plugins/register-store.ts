export function registerStore({ module, moduleName, store }) {
  const moduleIsRegistered =
    store._modules.root._children[moduleName] !== undefined
  const isStateExists = !!store.state[moduleName]
  if (!moduleIsRegistered) {
    store.registerModule(moduleName, module, { preserveState: isStateExists })
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app }, inject) => {
  inject('registerStore', registerStore)
}
