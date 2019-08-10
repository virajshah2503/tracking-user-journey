import React from 'react';
import PropTypes from 'prop-types';

const transferMessageRenderer = ({ message }) => {
  return (
    <span className="more-information">
      Please bring the{' '}
      <span
        className="list-documents"
        title={message.join(', ')}
      >
        list of documents
      </span>{' '}
      at the time of delivery.
    </span>
  );
};

transferMessageRenderer.propTypes = {
  document: PropTypes.array,
};

export default transferMessageRenderer;
