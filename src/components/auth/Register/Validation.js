export function validatonFields(items)
{
    let errors={};
    const {Email, Login, Password, ConfirmPassword} = items;
    const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!regex_email.test(Email.trim()))
    {
        errors ={
            ...errors,
            Email: "Вкажіть коректну пошту"
        }
    } 

    if(Login.trim() == '') 
    {
        errors = {
            ...errors,
            Login: "Вкажіть коректний логін"
        }
    }

    if(Password.trim() == '') 
    {
        errors= { 
            ...errors, 
            Password: "Вкажіть коректну пароль"
        }
    }

    if (ConfirmPassword !== Password)
    {
        errors ={
            ...errors,
            ConfirmPassword: "Повтор паролю не співпадає!"
        }
    }

    if (ConfirmPassword.trim() == '') 
    {
        errors ={
            ...errors,
            ConfirmPassword: "Повтор паролю не може бути пустим!"
        }
    }

    return errors;    
}