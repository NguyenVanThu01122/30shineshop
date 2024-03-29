export const getLocalStorageValue = (key: string) => {
  return localStorage.getItem(key)
}

export const setLocalStorageValue = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeLocalStorageValue = (key: string) => {
  localStorage.removeItem(key)
}
