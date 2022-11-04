import PropTypes from 'prop-types';
import { ButtonStyle } from './button.styled';

const Button = ({ text, type, onClick }) => (
  <ButtonStyle type={type} onClick={onClick}>
    {text}
  </ButtonStyle>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
