export function validatonFields(items)
{
    let errors={};
    const {Email, Password} = items;  //оголошуємо потрібні нам поля
    const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/; // регулярний вираз на електронку

    if (!regex_email.test(Email.trim())) // перевіряємо пошту на валідність через регулярний вираз
    {
        errors ={
            ...errors,
            Email: "Вкажіть коректну пошту"
        }
    } 

    if(Password.trim() == '')   // перевіряємо наш пароль на наявність і кількість символів
    {
        errors= { 
            ...errors, 
            Password: "Вкажіть коректну пароль"
        }
    }

    return errors;     // повертаємо всі помилки які виявили під час перевірок
}