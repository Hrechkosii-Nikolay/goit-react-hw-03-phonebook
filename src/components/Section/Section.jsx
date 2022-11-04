import PropTypes from 'prop-types';
import { SectionWrap } from './section.styled';
const Section = ({ title, children }) => (
  <SectionWrap>
    <h2>{title}</h2>
    {children}
  </SectionWrap>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  // children: PropTypes.object.isRequired,
};
