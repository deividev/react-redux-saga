

const initialState = {
	user: {
    email: "",
    password: "",
    isLogin: false
  }
}
	
export const user = (state = initialState.user, action) => {
    switch(action.type) {
    	case ('login'):
        state = {
          email: action.payload.email,
          password: '******',
          isLogin: true
        }
        return state;

      case ('logout'):
        state = {
          email: '',
          password: '',
          isLogin: false
        }
        return state;
      default:
        return state;
    }
  }
  
  export default user;