import React from 'react'
import validatonFields from './Validation';
import {Formik, Form} from 'formik';
import MyTextInput from "../../common/MyTextInput";

const LoginPage=()=>{

    const initState = {
        Email: '',
        Password: '',
    };

    const onSubmitHandler=(values) =>
    {
        console.log("Server submit data", values);
    }


    return (
        <div className="row">
            <h1 className="text-center">Вхід</h1>
            <div className="offset-md-3 col-md-6">
            <Formik 
                initialValues = {initState} 
                onSubmit={onSubmitHandler}
                validationSchema= {validatonFields()}>
                <Form>

                    <MyTextInput
                        label = "Електрона пошта"
                        name = "Email"
                        type = "Email"
                        id= "Email"
                    />

                    <MyTextInput
                        label = "Пароль"
                        name = "Password"
                        type = "password"
                        id= "Password"
                    />


                    <button type="submit" className="btn btn-dark">Увійти</button>
                </Form>
            </Formik>
            </div>
        </div>

    )




    // //створюємо обєкт стейт де описуємо наші поля
    // state = {
    //     Email: '',
    //     Password: '',
    //     isValidation: false,

    //     // добавляємо обєкт еррори
    //     errors: {
    //         Email: "",
    //         Password: "",
    //     }
    // }

    // //функція яка викликається під час відправки форми
    // onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     var errors = validatonFields(this.state); //викликаємо валідатор і передаємо стейт from './Validation'
    //     const isValid = Object.keys(errors).length === 0;   // створюємо змінну isValid і приводимо її до буля перевіркою чи є в нашому масиві помилки
    //                                                         // якщо значення буде не 0 тоді в нас є декілька помилок 
    //     if (isValid) // перевіряємо чи значення валідне якщо так тоді відправляємо дані на сервер
    //     {
    //         alert(this.state); // типу сервер
    //     }
    //     else // якщо значення не валідні
    //     {
    //         this.setState({errors: errors, isValidation: true}); // рендеримо нашу сторінку знову. І надсилаємо туди наші помилки 
    //     }
    // }
    
    // // функція яку викликає кожен інпут викликається при зміні значень в інпуті
    // onChangeHandler = (e) => {
    //     const {name, value} = e.target; // витягуємо імя і значення з інпута 
    //     const {isValidation} = this.state; // втановюємо значення isValidation (тру якщо форма вже надсилалася)

    //     if(isValidation) // якщо значення тру
    //     {
    //         const data = {...this.state, [name]: value} // розширяємо наш стейт і присвоюємо значення
    //         const errors = validatonFields(data) // надсилаєм дані щоб перевірити валідність тут дані перевіряються динамічно
    //         this.setState({ [name]: value, errors: errors }); // повторно рендерим з первіреними даними
    //     }
    //     else
    //     {
    //         this.setState({ [name]: value }) // повторно рендерим наш інпут з новим значенням
    //     }
    // }


    // render() {
    //     const {errors} = this.state;
    //     return (
    //         <div className="row">
    //             <h1 className="text-center">Вхід на сайт</h1>
    //             <div className="offset-md-3 col-md-6">
    //                 <form onSubmit={this.onSubmitHandler}>

    //                     <InputTextField  //викликали генератор інпута '../../common/InputTextField';
    //                         field ="Email"
    //                         label ="Пошта"
    //                         value ={this.state.Email}
    //                         error= {errors.Email}
    //                         onChange={this.onChangeHandler}
    //                     />

    //                     <InputTextField  //викликали генератор інпута '../../common/InputTextField';
    //                         field ="Password"
    //                         label ="Пароль"
    //                         value ={this.state.Password}
    //                         error= {errors.Password}
    //                         onChange={this.onChangeHandler}
    //                         type="password"
    //                     />

    //                     <button type="submit" className="btn btn-dark">Вхід</button>
    //                 </form>
    //             </div>

    //         </div>
    //     )
    // }
}

export default LoginPage
