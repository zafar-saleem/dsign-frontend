import $ from 'jquery';

class UserLoginModel {

    constructor() {
        console.log('User Login Model');
    }

    registerUser(user) {
        return $.ajax({
            url: 'http://localhost:3000/users/register/',
            data: user,
            dataType: 'JSON',
            method: 'POST'
        });
    }
}

export default UserLoginModel;

