import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'; 
import { toast } from 'react-toastify';
import { Container, Grid, TextField, Typography } from '@material-ui/core'; 

import Button from '../../components/Button/Button'; 
import { REGISTER_PAGE } from './../../constants/constant'
import { handleLoginForm } from '../../utils/Validation/Validation';
import { useStyles } from './useStyles';
import './LoginPage.scss';
import { loginAction } from '../../redux/actions/user';

toast.configure();
const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    taiKhoan: '',
    matKhau: '',
  });

  const loginStatus = useSelector((state) => {
    return state.user.loginStatus;
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const {taiKhoan, matKhau} = fields

    handleLoginForm(fields, loginStatus);
    console.log(loginStatus);


    dispatch(loginAction(taiKhoan.trim(), matKhau.trim())); // dispatch action

  };
  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <div className={classes.paper}>
        <Typography
          className='title'
          component='h1'
          variant='h3'
        >
          Sign in
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
            label='Username'
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
            label='matKhau'
            margin='normal'
            name='matKhau'
            onChange={(event) => handleChange(event)}
            required
            type='password'
            value={fields.matKhau}
            variant='outlined'
          />
          <Button type='submit'>Sign In</Button>
          <Grid container>
            <Grid item>
              <div className={classes.registerLink}>
                <p>
                  Don't have an account?
                  <Link
                    className={classes.link}
                    to = {REGISTER_PAGE}
                  >
                    Register
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

LoginPage.propTypes = {
  taiKhoan: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func, 
  matKhau: PropTypes.string 
};

export default LoginPage;
