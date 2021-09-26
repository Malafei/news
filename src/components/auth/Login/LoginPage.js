import React, { Component } from 'react'
import InputTextField from '../../common/InputTextField';
import {validatonFields} from './Validation';

export class LoginPage extends Component {
  
    state = {
        Email: '',
        Password: '',
        isValidation: false,

        errors: {
            Email: "",
            Password: "",
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
                <h1 className="text-center">Вхід на сайт</h1>
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
                            field ="Password"
                            label ="Пароль"
                            value ={this.state.Password}
                            error= {errors.Password}
                            onChange={this.onChangeHandler}
                            type="password"
                        />

                        <button type="submit" className="btn btn-dark">Вхід</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default LoginPage
