import React, { Component } from 'react'

class RegisterPage extends Component {
    state = {
        email: 'ukrainelove@gmail.com'
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        //this.setState({"email": "222"})
    }
    onChangeHandler = (e) => {
        const { name, value } = e.target;
        //console.log(name, value);
        this.setState({ [name]: value })
    }

    render() {
        //console.log(this.state)
        return (
            <div className="row">
                <h1 className="text-center">Реєстрація</h1>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.onSubmitHandler}>
                        
                        <div className="mb-3">
                            <label htmlfor="Email">Пошта</label>
                            <input type="text"
                                className="form-control" id="Email"
                                value={this.state.email}
                                name="Email"
                                onChange={this.onChangeHandler}
                                placeholder="Вкажіть пошту" />

                            <div className="invalid-feedback">
                                Поле обовязкове для введення.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlfor="Login">Логін</label>
                            <input type="text" className="form-control" id="Login"
                                name="Login"
                                placeholder="Вкажіть логін" />

                            <div className="invalid-feedback">
                                Поле обовязкове для введення.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlfor="Password">Пароль</label>
                            <input type="password" className="form-control" id="Password"
                                value={this.state.password}
                                name="password"
                                onChange={this.onChangeHandler}
                                placeholder="Вкажіть пароль" />

                            <div className="invalid-feedback">
                                Паролі повині співпадати.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlfor="ConfirmPassword">Підтвердіть пароль</label>
                            <input type="password" className="form-control" id="ConfirmPassword"
                                placeholder="Повторіть пароль" />

                            <div className="invalid-feedback">
                                Паролі повині співпадати.
                            </div>
                        </div>
                        {/* <div className="mb-3">
                            <label htmlfor="email">Пошта</label>
                            <input type="email"
                            className="form-control" id="email"
                            value = {this.state.email}
                            name="email"
                            onChange={this.onChangeHandler}
                            placeholder="Вкажіть пошту" />
                            </div>

                        <div className="mb-3">
                            <label htmlfor="password">Пароль</label>
                            <input type="password"
                            className="form-control" id="email"
                                value = {this.state.password}
                                name="password"
                                onChange={this.onChangeHandler}
                                placeholder="Вкажіть пароль" />
                            </div> */}

                        <button type="submit" className="btn btn-dark" id="btnReg" name="btnReg">Реєстрація</button>
                    </form>
                </div>

            </div>
        )
    }
}
// коли вікно загрузилося
window.onload = function () {
    // визначаєм кнопку реєстрації
    var btnReg = document.getElementById("btnReg");

    // ініціалізуєм наші поля
    var txtEmail = document.getElementById("Email");
    var txtLogin = document.getElementById("Login")
    var txtPassword = document.getElementById("Password");
    var txtConfirmPassword = document.getElementById("ConfirmPassword");

    // тут буде валідація для пошти
    //
    //
    //

    // валідаціїї для поля Логін
    txtLogin.oninput = function () {
        if (txtLogin.value == "") { // перевіряємо чи в інпуті є значення
            showError(txtLogin);
        }
        else {
            showSuccess(txtLogin);
        }
    }

    // валідація для поля Пароль
    txtPassword.oninput = isValidPassword; // перевірка на правельність паролів

    // валідація для поля Повторення Пароля
    txtConfirmPassword.oninput = isValidPassword; // перевірка на правельність паролів


    function isValidPassword(e) {
        if (txtPassword.value != txtConfirmPassword.value || txtConfirmPassword.value == "") { // перевіряємо чи паролі співпадають та чи вони не пусті
            txtConfirmPassword.classList.add("is-invalid");     //додаємо помилку в поле ConfirmPassword
            txtPassword.classList.add("is-invalid");            //додаємо помилку в поле Password
            txtConfirmPassword.classList.remove("is-valid");    //видаляєм успіх з поля ConfirmPassword
            txtPassword.classList.remove("is-valid");           //видаляєм успіх з поля Password
            console.log("tak");
        }
        else {
            txtConfirmPassword.classList.remove("is-invalid");    //видаляєм помилку в поле ConfirmPassword
            txtPassword.classList.remove("is-invalid");           //видаляєм помилку в поле Password
            txtConfirmPassword.classList.add("is-valid");         //додаємо успіх з поля ConfirmPassword
            txtPassword.classList.add("is-valid");                //додаємо успіх з поля Password
            console.log("ni");
        }
    }


    function showError(input) { // сюди передається інпут який передаємо isValidTextInput(e)
        input.classList.add("is-invalid"); // додаємо валідацію is-invalid
        input.classList.remove("is-valid"); // видаляємо валідацію is-valid
    }

    function showSuccess(input) { // сюди передається інпут який передаємо isValidTextInput(e)
        input.classList.remove("is-invalid"); // видаляємо валідацію is-invalid
        input.classList.add("is-valid"); // додаємо валідацію is-valid
    }

    btnReg.onclick = function () {
        var email = txtEmail.value; // зміна для почти
        var login = txtLogin.value; // зміна для логіна
        var password = txtPassword.value; // зміна для паролю
        var confirmPassword = txtConfirmPassword.value; // зміна для повторення паролю

        var isValid = true; // зміна для перевірки чи у всіх є значення. По замовчувані true

        //#region Validation

        //валідація на пароль
        if (password != confirmPassword || password == "") {
            showError(txtPassword);
            isValid = false;
        }
        else {
            showSuccess(txtPassword);
        }

        // валідація на повторення паролю
        if (password != confirmPassword || confirmPassword == "") {
            showError(txtConfirmPassword);
            isValid = false;
        }
        else {
            showSuccess(txtConfirmPassword);
        }

        // валідація на логін
        if (login == "") {
            showError(txtLogin);
            isValid = false;
        }
        else {
            showSuccess(txtLogin);
        }

        if (isValid) {
            alert("Ви зареєструвались")
        }

        //#endregion
    }
}

export default RegisterPage;


