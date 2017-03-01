import $ from 'jquery';
import LoginTemplate from '../../../templates/login/Login.handlebars';

class UserLoginView {

    constructor(model) {
        this._model = model;

        this._render();
    }

    _render() {
        console.log('render');
        $('.ds-m-login').html(LoginTemplate());
    }
}

export default UserLoginView;

