

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

  // export const getUser = (user) => {
  //   return {
  //     type: 'getUser',
  //     payload: user
  //   }
  // }
 