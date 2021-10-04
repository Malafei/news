import * as Yup from 'yup';

const validationFields= () => {
    return Yup.object({
        Email: Yup.string()
            .email('Не коректно вказана пошта')
            .required("Вкажіть пошту"),

        Password: Yup.string()
            .required('Вкажіть пароль.') 
            .min(8, 'Пароль має містить мінімум 8 символів.')
            .matches(/[a-zA-Z]/, 'Пароль має містить латинські символи.'),
    });
}
export default validationFields;







// export function validatonFields(items)
// {
//     let errors={};
//     const {Email, Login, Password, ConfirmPassword, Phone} = items; //оголошуємо потрібні нам поля
//     const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/; // регулярний вираз на електронку
//     const regex_phone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ // регулярний вираза на телефон


//     if (!regex_email.test(Email.trim())) // перевіряємо пошту на валідність через регулярний вираз
//     {
//         errors ={
//             ...errors,
//             Email: "Вкажіть коректну пошту"
//         }
//     } 

//     if (!regex_phone.test(Phone.trim())) // перевіряємо номер на валідність через регулярний вираз
//     {
//         errors ={
//             ...errors,
//             Phone: "Вкажіть коректний номер"
//         }
//     }


//     if(Object.keys(Login).length < 6)  // перевіряємо наш логін на наявність і кількість символів
//     {
//         errors = {
//             ...errors,
//             Login: "Вкажіть коректний логін (Логін повинен містити мінімум 6 символів)!"
//         }
//     }


//     if(Object.keys(Password).length < 8) // перевіряємо наш пароль на наявність і кількість символів 
//     {
//         errors= { 
//             ...errors, 
//             Password: "Вкажіть коректний пароль (Пароль повинен містити мінімум 8 символів)!"
//         }
//     }

//     if (ConfirmPassword !== Password) // перевіряємо чи повторення паролю співпадає з паролем
//     {
//         errors ={
//             ...errors,
//             ConfirmPassword: "Паролі не співпадають!"
//         }
//     }

//     if (ConfirmPassword.trim() == '') // перевіряємо повторення паролю на наявність символів 
//     {
//         errors ={
//             ...errors,
//             ConfirmPassword: "Повтор паролю не може бути пустим!"
//         }
//     }

//     return errors;    // повертаємо всі помилки які виявили під час перевірок
// }