import PropTypes from 'prop-types';

const LessonsTitle = ({ children }) => {
  return <h2>{children}</h2>;
};

export default LessonsTitle;

LessonsTitle.protoTypes = {
  children: PropTypes.element.isRequired,
};
