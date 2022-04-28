

export function deepcopy(obj: Object): Object {
  return obj ? JSON.parse(JSON.stringify(obj)) : null
}

