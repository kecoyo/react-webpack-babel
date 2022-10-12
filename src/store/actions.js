const actions = {};

export function defineAction(name) {
  if (actions[name]) {
    throw new Error(`action ${name} alerady exists`);
  }

  actions[name] = (payload) => ({ type: name, payload });
}

export default actions;
