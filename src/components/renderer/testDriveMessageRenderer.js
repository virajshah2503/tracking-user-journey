import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const testDriveMessageRenderer = React.memo(({ message }) => {
  const [showMore, toggleShowMore] = useState(true);

  const toggleHandler = useCallback(() => {
    toggleShowMore(preState => !preState);
  });

  const renderOneCarInfo = () => {
    const totalCar = message.length;
    return (
      <span className="more-information">
        {message[0]} and{' '}
        {totalCar > 1 &&
          <span
            className="showMoreCars"
            onClick={toggleHandler}
            title="show more"
          >
            {totalCar - 1} others
          </span>
        }
      </span>
    );
  };

  const renderAllCarInfo = () => {
    return (
      <span className="more-information">
        {message.join(', ')}
          <span
            className="hideCars"
            onClick={toggleHandler}
            title="show less"
          >
            {' '}
            less
          </span>
      </span>
    )
  };

  return showMore ? renderOneCarInfo() : renderAllCarInfo();
});

testDriveMessageRenderer.propTypes = {
  message: PropTypes.array,
};

export default testDriveMessageRenderer;
