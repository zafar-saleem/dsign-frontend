// import 'style!css!sass!bootstrap/dist/css/bootstrap.css';

import UserLoginModel from './scripts/models/Login/UserLoginModel';
import UserLoginView from './scripts/views/Login/UserLoginView';
import RegisterUserView from './scripts/views/Login/RegisterUserView';

let loginModel = new UserLoginModel();
let loginView = new UserLoginView(loginModel);
let registerView = new RegisterUserView(loginModel);

