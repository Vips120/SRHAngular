export class RegEx {
    static Username(control) {
         console.log(control.value);
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        // console.log(valid);
        return valid ? null : { username: true };
    };

    static UserId(control) {
        let regx = /^[a-zA-Z0-9\-]+$/;
        let valid = regx.test(control.value);
        // console.log(valid);
        return valid ? null : { userid: true };
    }

    static EmailId(control) {
        let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regx.test(control.value);
        return valid ? null : { emailid: true };
    };

    static Password(control) {
        let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let valid = regx.test(control.value);
        return valid ? null : { password: true };
    }
}