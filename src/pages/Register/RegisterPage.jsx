/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Container, TextField, Typography, Grid } from '@material-ui/core';

import Button from './../../components/Button/Button';
import {
  handleRegisterForm, 
} from '../../utils/Validation/Validation';
import { LOGIN_PAGE } from './../../constants/constant'
import { registerAction } from '../../redux/actions/user';

import { useStyles } from './../Register/useStyles';
import './RegisterPage.scss';
toast.configure()
const RegisterPage = () => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: '',
    maLoaiNguoiDung: '',
    hoTen: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen } = fields;

    // handleRegisterForm(fields); 

    dispatch(registerAction(
      taiKhoan.trim(),
      matKhau.trim(),
      email.trim(),
      soDt.trim(),
      maNhom.trim(),
      maLoaiNguoiDung.trim(),
      hoTen.trim(),
      ));
  };
  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <div className={classes.paper}>
        <Typography
          className='title'
          component='h3'
          variant='h3'
        >
          Register
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            autoComplete='taiKhoan'
            autoFocus
            className={classes.field}
            fullWidth
            id='taiKhoan'
            label='TaiKhoan'
            margin='normal'
            name='taiKhoan'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.taiKhoan}
            variant='outlined'
          />
          <TextField
            autoComplete='matKhau'
            className={classes.field}
            fullWidth
            id='matKhau'
            label='MatKhau'
            margin='normal'
            name='matKhau'
            onChange={(event) => handleChange(event)}
            required
            type='password'
            value={fields.matKhau}
            variant='outlined'
          />
          <TextField
            autoComplete='hoTen'
            className={classes.field}
            fullWidth
            id='hoTen'
            label='HoTen'
            margin='normal'
            name='hoTen'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.hoTen}
            variant='outlined'
          />
          <TextField
            autoComplete='email'
            className={classes.field}
            fullWidth
            id='email'
            label='Email'
            margin='normal'
            name='email'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.email}
            variant='outlined'
          />
          <TextField
            autoComplete='phomeNumber'
            className={classes.field}
            fullWidth
            id='soDt'
            label='soDt'
            margin='normal'
            name='soDt'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.soDt}
            variant='outlined'
          />
          <TextField
            autoComplete='maNhom'
            className={classes.field}
            fullWidth
            id='maNhom'
            label='MaNhom'
            margin='normal'
            name='maNhom'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.maNhom}
            variant='outlined'
          />
          <TextField
            autoComplete='maLoaiNguoiDung'
            className={classes.field}
            fullWidth
            id='maLoaiNguoiDung'
            label='Ma Loai Nguoi Dung'
            margin='normal'
            name='maLoaiNguoiDung'
            onChange={(event) => handleChange(event)}
            required
            type='text'
            value={fields.maLoaiNguoiDung}
            variant='outlined'
          />
          <Button
            color='primary'
            type='submit'
            variant='contained'
          >
            Create taiKhoan
          </Button>
          <Grid container>
            <Grid item>
              <div className={classes.loginLink}>
                <p>
            Have an taiKhoan?
                  <Link
                    className={classes.link}
                    to = {LOGIN_PAGE}
                  >
              Login
                  </Link>
                </p>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

// RegisterPage.propTypes = {
//   fields: PropTypes.shape({
//     taiKhoan: PropTypes.string.isRequired,
//     matKhau: PropTypes.string.isRequired,
//     hoTen: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired, 
//   }),
//   onChange: PropTypes.func, 
//   onSubmit: PropTypes.func,
// };

export default RegisterPage;