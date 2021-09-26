
import React, { Component } from 'react'
import InputTextField from '../../common/InputTextField';
import {validatonFields} from './Validation';

class RegisterPage extends Component {

    state = {
        Email: '',
        Login: '',
        Password: '',
        ConfirmPassword: '',
        isValidation: false,

        errors: {
            Email: "",
            Login: "",
            Password: "",
            ConfirmPassword: "",
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        var errors =validatonFields(this.state);
        const isValid = Object.keys(errors).length === 0;
        if (isValid)
        {
            alert(this.state);
        }
        else
        {
            this.setState({errors: errors, isValidation: true});
        }
        //console.log("наш стейт", this.state);
        
    }
    onChangeHandler = (e) => {
        const {name, value} = e.target;
        //console.log(name, value);
        const {isValidation} = this.state;
        if(isValidation)
        {
            const data = {...this.state, [name]: value}
            const errors = validatonFields(data)
            this.setState({ [name]: value, errors: errors });
        }
        else
        {
            this.setState({ [name]: value })
        }
    }

    


    render() {
        
        const {errors} = this.state;
        return (
            <div className="row">
                <h1 className="text-center">Реєстрація</h1>
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.onSubmitHandler}>

                        <InputTextField
                            field ="Email"
                            label ="Пошта"
                            value ={this.state.Email}
                            error= {errors.Email}
                            onChange={this.onChangeHandler}
                        />

                        <InputTextField
                            field ="Login"
                            label ="Логін"
                            value ={this.state.Login}
                            error= {errors.Login}
                            onChange={this.onChangeHandler}
                            type="text"
                        />

                        <InputTextField
                            field ="Password"
                            label ="Пароль"
                            value ={this.state.Password}
                            error= {errors.Password}
                            onChange={this.onChangeHandler}
                            type="password"
                        />

                        <InputTextField
                            field ="ConfirmPassword"
                            label ="Повторіть пароль"
                            value ={this.state.ConfirmPassword}
                            error= {errors.ConfirmPassword}
                            onChange={this.onChangeHandler}
                            type="password"
                        />
                        
                        <button type="submit" className="btn btn-dark">Реєстрація</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default RegisterPage;


