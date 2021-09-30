import classnames from "classnames";
import React, { Component } from 'react'
import InputTextField from '../../common/InputTextField';
import { validatonFields } from './Validation';

class RegisterPage extends Component {

    //створюємо обєкт стейт де описуємо наші поля
    state = {
        Email: '',
        Phone: '',
        Login: '',
        Password: '',
        ConfirmPassword: '',
        Photo: '',
        BasePhoto: '',
        isValidation: false,

        // добавляємо обєкт еррори
        errors: {
            Email: "",
            Phone: "",
            Login: "",
            Password: "",
            ConfirmPassword: "",
            Photo: ""
        }
    }


    //функція яка викликається під час відправки форми
    onSubmitHandler = (e) => {

        e.preventDefault();

        var errors = validatonFields(this.state); //викликаємо валідатор і передаємо стейт from './Validation'
        const isValid = Object.keys(errors).length === 0;   // створюємо змінну isValid і приводимо її до буля перевіркою чи є в нашому масиві помилки
        // якщо значення буде не 0 тоді в нас є декілька помилок 
        if (isValid) // перевіряємо чи значення валідне якщо так тоді відправляємо дані на сервер
        {
            alert(this.state); // типу сервер
        }
        else // якщо значення не валідні
        {
            this.setState({ errors: errors, isValidation: true }); // рендеримо нашу сторінку знову. І надсилаємо туди наші помилки 
        }

    }

    // функція яку викликає кожен інпут викликається при зміні значень в інпуті
    onChangeHandler = (e) => {
        const { name, value } = e.target; // витягуємо імя і значення з інпута 
        const { isValidation } = this.state; // втановюємо значення isValidation (тру якщо форма вже надсилалася)
        console.log(this.state.Photo);
        if (isValidation) // якщо значення тру
        {
            const data = { ...this.state, [name]: value } // розширяємо наш стейт і присвоюємо значення
            const errors = validatonFields(data) // надсилаєм дані щоб перевірити валідність тут дані перевіряються динамічно
            this.setState({ [name]: value, errors: errors }); // повторно рендерим з первіреними даними
        }
        else {
            this.setState({ [name]: value }) // повторно рендерим наш інпут з новим значенням
        }
    }


    onChangePhoto = (e) => {
        const files = e.target.files;
        var Photo;
        if (files && files[0]) { // перевіряємо чи файл обрано
            const file = files[0]; // присваюємо
            if (file.type.match(/^image\//)) { // перевіряємо чи тип файлу фото
                const reader = new FileReader(); // створюємо змінну
                reader.onload = function () { // після загрузки файлу виконуємо наступний код....
                    
                    Photo = reader.result;
                    console.log(Photo);
                }
                reader.readAsDataURL(file); //використовується для читання File. Коли операція закінчиться
            }
        }
        const { isValidation } = this.state; // втановюємо значення isValidation (тру якщо форма вже надсилалася)
        if (isValidation) // якщо значення тру
        {
            const data = { ...this.state, 'Photo': Photo } // розширяємо наш стейт і присвоюємо значення
            const errors = validatonFields(data) // надсилаєм дані щоб перевірити валідність тут дані перевіряються динамічно
            this.setState({ 'Photo': Photo, errors: errors }); // повторно рендерим з первіреними даними
        }
        else {
            this.setState({ 'Photo': Photo }) // повторно рендерим наш інпут з новим значенням
            this.setState({ 'PhotoBase': Photo })
        }
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="row">
                <h1 className="text-center">Реєстрація</h1>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.onSubmitHandler}>

                        <InputTextField //викликали генератор інпута '../../common/InputTextField';
                            field="Email"
                            label="Пошта"
                            value={this.state.Email}
                            error={errors.Email}
                            onChange={this.onChangeHandler}
                        />

                        <InputTextField //викликали генератор інпута '../../common/InputTextField';
                            field="Phone"
                            label="Номер телефону"
                            value={this.state.Phone}
                            error={errors.Phone}
                            onChange={this.onChangeHandler}
                            type="number"
                            placeholder="+38(XXX)-XXX-XX-XX"
                        />

                        <InputTextField //викликали генератор інпута '../../common/InputTextField';
                            field="Login"
                            label="Логін"
                            value={this.state.Login}
                            error={errors.Login}
                            onChange={this.onChangeHandler}
                            type="text"
                        />

                        <InputTextField //викликали генератор інпута '../../common/InputTextField';
                            field="Password"
                            label="Пароль"
                            value={this.state.Password}
                            error={errors.Password}
                            onChange={this.onChangeHandler}
                            type="password"
                        />

                        <InputTextField //викликали генератор інпута '../../common/InputTextField';
                            field="ConfirmPassword"
                            label="Повторіть пароль"
                            value={this.state.ConfirmPassword}
                            error={errors.ConfirmPassword}
                            onChange={this.onChangeHandler}
                            type="password"
                        />

                        <div className="mb-3">
                            <img src={this.state.BasePhoto} id="PhotoBase" name="PhotoBase" alt="Твоє фото"></img>

                            <input type="file"
                                className={classnames("form-control",
                                    { "is-invalid": errors.Photo },
                                    { "is-valid": errors.Photo == undefined }
                                )}
                                id="Photo"
                                name="Photo"
                                value={this.state.Photo}
                                onChange={this.onChangePhoto}
                                placeholder="Натисніть для вибору фото"
                            />
                            {!!errors.Photo && <div className="invalid-feedback">{errors.Photo}</div>}
                        </div>

                        <button type="submit" className="btn btn-dark">Реєстрація</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default RegisterPage;


