import $ from 'jquery';
import RegisterTemplate from '../../../templates/login/Register.handlebars';

class RegisterUserView {
    constructor(model) {
        this._model = model;

        this._render();
    }

    _render() {
        $('.ds-m-register').html(RegisterTemplate());
    }
}

export default RegisterUserView;

