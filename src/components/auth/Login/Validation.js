export function validatonFields(items)
{
    let errors={};
    const {Email, Password} = items;
    const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!regex_email.test(Email.trim()))
    {
        errors ={
            ...errors,
            Email: "Вкажіть коректну пошту"
        }
    } 

    if(Password.trim() == '') 
    {
        errors= { 
            ...errors, 
            Password: "Вкажіть коректну пароль"
        }
    }

    return errors;    
}