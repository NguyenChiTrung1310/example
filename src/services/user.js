import axios from 'axios';
import { LOGIN_API, REGISTER_API } from './api';

export function LoginService(data) {
    return  axios({
      method: 'POST',
      url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      data,
    });
}

export function RegisterService(taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen){
  const registerData = {taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen};
  return axios({
    method: 'POST',
    url: REGISTER_API,
    data: registerData
  });
}