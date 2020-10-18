import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAILL } from "../../constants/constant";

let initialState = {
    credentials: null,
    loginStatus: null,
  };
  
  const UserReducer = (state = initialState, action) => {
    const { type, loginStatus } = action
    switch (type) {
      case LOGIN_SUCCESS:
        // state.credentials = payload;
        return { 
          ...state,
          loginStatus: loginStatus 
        };

      case LOGIN_FAILL:
        // state.credentials = payload;
        return { 
          ...state,
          loginStatus: loginStatus 
        };





      // case REGISTER_SUCCESS:
      //   state.credentials = payload;
      //   return { ...state };
      default:
        return state;
    }
  };
  
  export default UserReducer;