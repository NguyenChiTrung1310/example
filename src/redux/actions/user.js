import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAILL } from '../../constants/constant';
import {LoginService, RegisterService} from '../../services';

// login success
const loginSucceeded = (loginData) => {
    const {status} = loginData;
    return {
      type: LOGIN_SUCCESS,
      loginStatus: status,
      // loginMessage: msg
    };
  }
  
  // login failed
  const loginFailed = (loginData) => {
    const {status} = loginData;
    return {
      type: LOGIN_FAILL,
      loginStatus: status
    };
  }

export const loginAction = (taiKhoan, matKhau) => {
    return (dispatch) => {
        LoginService(taiKhoan, matKhau)
        .then(res => {
            dispatch(loginSucceeded(res));
            // localStorage.setItem('credentials', JSON.stringify(res.data));
            console.log(res)
        })
        .catch((err) => {
            dispatch(loginFailed(err.res));
            console.log(err.res)
          });
    }
}

export const registerAction = (taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen) => {
    return (dispatch) => {
        RegisterService(taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen)
        .then(res => {
            // dispatch(createAction(REGISTER_SUCCESS, res.data));
            // localStorage.setItem('credentials1', JSON.stringify(res.data));
            console.log(res);
        })
        .catch((err) => {
            console.log(err)});
    }
}
