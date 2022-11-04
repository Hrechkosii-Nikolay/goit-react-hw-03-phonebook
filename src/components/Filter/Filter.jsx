import PropTypes from 'prop-types';

const Filter = ({ name, type, label, value, onChange }) => (
  <label>
    <p>{label}</p>
    <input name={name} type={type} value={value} onChange={onChange} required />
  </label>
);

export default Filter;

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
