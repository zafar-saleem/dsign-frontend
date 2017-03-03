import $ from 'jquery';
import UserLoginModel from './scripts/models/Login/UserLoginModel';
import UserLoginView from './scripts/views/Login/UserLoginView';
import UserRegisterView from './scripts/views/Login/RegisterUserView';

let loginModel = new UserLoginModel();
let loginView = new UserLoginView(loginModel);
let registerView = new UserRegisterView(loginModel, {
    registrationForm: $('.ds-m-register')
});

