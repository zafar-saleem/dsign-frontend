import $ from 'jquery';
import RegisterTemplate from '../../../templates/login/Register.handlebars';
import DashboardTemplate from '../../../templates/dashboard/Dashboard.handlebars';

const EVENTS = {
    CLICK: 'click'
};

let email, password, repeatPassword;

class RegisterUserView {

    constructor(model, elements) {
        this._model = model;
        this.$registrationForm = elements;
        this.$body = $('body');
        this.$registrationContainer = $('.ds-m-register');

        this._render();

        this.$body.on(EVENTS.CLICK, '.ds-m-btn-register', this._handleRegistration.bind(this));
    }

    _render() {
        this.$registrationContainer.html(RegisterTemplate());
    }

    _handleRegistration(event) {
        email = $('.ds-js-register-email').val();
        password = $('.ds-js-register-password').val();
        repeatPassword = $('.ds-js-register-rpassword').val();

        let user = {
            email: email,
            password: password,
            repeatPassword: repeatPassword
        };

        this._model.registerUser(user).then(this._handleRegistrationResponse.bind(this));

        event.preventDefault();
    }

    _handleRegistrationResponse(response) {
        if (response) {
            response.forEach(this._onHandleRegistrationErrors);
            return;
        }

        $('.ds-m-wrapper').html(DashboardTemplate());
    }

    _handleOnRegistrationErrors(item) {
        if (item.param === 'email') {
            $('.ds-js-register-email').parent().addClass('has-error');
        }

        if (item.param === 'password') {
            $('.ds-js-register-password').parent().addClass('has-error');
        }

        if (item.param === 'repeatPassword') {
            $('.ds-js-register-rpassword').parent().addClass('has-error');
        }
    }
}

export default RegisterUserView;

