import $ from 'jquery';
import LoginTemplate from '../../../templates/login/Login.handlebars';

const EVENTS = {
    CLICK: 'click'
};

let $body = $('body');
let $loginContainer = $('.ds-m-login');

class UserLoginView {

    constructor(model) {
        this._model = model;

        this._render();

        $body.on(EVENTS.CLICK, '.ds-js-btn-login', this._handleLogin.bind(this));
    }

    _render() {
        $loginContainer.html(LoginTemplate());
    }

    _handleLogin(event) {
        let email = $('.ds-js-login-email').val();
        let password = $('.ds-js-login-password').val();

        this._model.loginUser({
            email: email,
            password: password
        }).then(this._onLogin.bind(this));

        event.preventDefault();
    }

    _onLogin(response) {
        console.log(response);
        if (!response) {
            return;
        }

        response.forEach(this._onHandleLoginErrors);
    }

    _onHandleLoginErrors(error) {
        if (error.param === 'email') {
            $('.ds-js-login-email').parent().addClass('has-error');
        }

        if (error.param === 'password') {
            $('.ds-js-login-password').parent().addClass('has-error');
        }
    }
}

export default UserLoginView;

