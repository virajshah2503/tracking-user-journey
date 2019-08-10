import React from 'react';
import PropTypes from 'prop-types';

const textRenderer = ({ message }) => {
  return (
    <span className="more-information">
      {message}
    </span>
  )
};

textRenderer.propTypes = {
  message: PropTypes.string,
};

export default textRenderer;
