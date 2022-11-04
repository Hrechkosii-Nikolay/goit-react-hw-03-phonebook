import PropTypes from 'prop-types';

const Input = ({ name, type, label, pattern, title, value, onChange }) => (
  <label>
    <p>{label}</p>
    <input
      name={name}
      type={type}
      pattern={pattern}
      title={title}
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};
