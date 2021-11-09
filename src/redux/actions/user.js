

export const login = (user) => {
    return {
      type: 'login',
      payload: user
    }
  }
  
  export const logout = () => {
    return {
      type: 'logout',
    }
  }

  export const isLogged = (user) => {
    debugger
    return {
      type: 'isLogged',
      payload: user
    }
  }
