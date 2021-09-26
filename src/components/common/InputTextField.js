import classnames from "classnames";
import PropTypes from "prop-types";

const InputTextField = ({
    field,
    label, 
    value,
    error,
    type,
    placeholder,
    onChange
}) => {
    return(

    <div className="mb-3">
        <label htmlfor={field}>{label}</label>
        <input type={type}
            className={classnames("form-control",
                        {"is-invalid": error},
                        {"is-valid": error == undefined}
                        )}
            id={field}
            name={field}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />
        {!!error && <div className="invalid-feedback">{error}</div>}
    </div>
    );
};

InputTextField.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  InputTextField.defaultProps = {
    type: "text",
    placeholder: "Введіть дані"
  };



export default InputTextField;