import { useState } from "react";
import { useField } from 'formik';

const MyPhotoInput = ({ Myfield, formikRef, ...props }) => {


    // фото яке показується по замовчувані
    // ми сказали шо у поле фото Буде закидать через сетфото
    const [Photo, setPhoto] = useState("https://bytes.ua/wp-content/uploads/2017/08/no-image.png");
    // ми сказали шо у поле ерор Буде закидать через сетерор
    const [error, setError] = useState("");



    const [field, meta] = useField(props);

    // функція яка викликається при події он чандж на інпуті
    const selectImage = (event) => {

        const files = event.currentTarget.files;

        if (!(files && files[0])) {
            setError("Поле не може бути пустим")// якщо файл не обрано наказуємо обрати фото
            return;//виходимо з функції selectImage
        }
        if (!(((files[0].size / 1024) / 1024) < 10)) { // перевіряємо чи розмір не перевищує 10 мб (переводимо байти в мегабайти)
            setError("Занадто великий файл")// якщо розмір файлу неправильний наказуємо обрати фото меншого розміру
            return; //виходимо з функції selectImage
        }
        if (!(files[0].type.match(/^image\//))) { // перевіряємо чи тип файлу фото
            setError("Оберіть файл з типом фото")// якщо розмір файлу неправильний наказуємо обрати фото меншого розміру
            return;//виходимо з функції selectImage
        }
        setPhoto(URL.createObjectURL(files[0])); //це функція яку ми самі оголосили яка показує фото по замовчувані ми туди присвоюєм наше фото
        formikRef.current.setFieldValue(Myfield, files[0]); // тут передаємо фото у формік Myfield це назва зміної зі стейта ми отримало фого з регістерпейдж
        setError("") // в помилки присвоюєм пусту строку щоб зникли всі помилки
    }

    return (
        <div className="mb-3">
            <label htmlFor={field.id || field.name}>
                <img
                    src={Photo}
                    width="150"
                />
            </label>

            <input type="file"
                style={{ display: "none" }}
                className="form-control"
                id={field.id}
                onChange={selectImage}
            />

            {error && <span className="text-danger">{error}</span>} 
        {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}

        </div>
    );
};

export default MyPhotoInput;