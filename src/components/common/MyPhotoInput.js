import { useState } from "react";
import { useField } from 'formik';

const MyPhotoInput = ({ formikRef, ...props }) => {


    // фото яке показується по замовчувані
    const [Photo, setPhoto] = useState("https://bytes.ua/wp-content/uploads/2017/08/no-image.png");


    const [field, meta] = useField(props);

    // функція яка викликається при події он чандж на інпуті
    const selectImage = (event) => {
        const FILE_OBJECT = event.currentTarget.files[0];
        setPhoto(URL.createObjectURL(FILE_OBJECT));
        
        formikRef.current.setFieldValue(props.id, FILE_OBJECT);
    }

    return (
        <div className="mb-3">
            <label htmlFor={props.name}>
                <img
                    src={Photo}
                    width="150"
                />
            </label>

            <input type="file"
                style={{ display: "none" }}
                className="form-control"
                id={props.id}
                onChange={selectImage}
            />

            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
        </div>
    );
};

export default MyPhotoInput;