import PropTypes from "prop-types";

const FormField = ({ id, label, type, placeholder, isTextArea }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-gray-700 font-semibold mb-2">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 h-32"
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
      />
    )}
  </div>
);

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool,
};

// Default props
FormField.defaultProps = {
  type: "text",
  isTextArea: false,
};

export default FormField;
