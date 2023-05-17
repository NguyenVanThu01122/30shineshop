const handleDirection = (url: string) => {
  window.location.assign(url)
}

const checkLogin = (): boolean => {
  if (localStorage.getItem('token')) {
    return true
  } else {
    return false
  }
}

export { handleDirection, checkLogin }
