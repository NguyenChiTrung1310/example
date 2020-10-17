import { createAction } from '.';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../../constants/constant';
import {LoginService, RegisterService} from '../../services';

export const loginAction = (data) => {
    return (dispatch) => {
        LoginService(data)
        .then(res => {
            // dispatch(createAction(LOGIN_SUCCESS, res.data));
            // localStorage.setItem('credentials', JSON.stringify(res.data));
            console.log(res)
        })
        .catch((err) => console.log(err));
    }
}

export const registerAction = (taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen) => {
    return (dispatch) => {
        RegisterService(taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen)
        .then(res => {
            // dispatch(createAction(REGISTER_SUCCESS, res.data));
            // localStorage.setItem('credentials1', JSON.stringify(res.data));
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err)});
    }
}
