import React from 'react';
import PropTypes from 'prop-types';

//renderer
import textRenderer from '../renderer/textRenderer';
import testDriveMessageRenderer from '../renderer/testDriveMessageRenderer';
import transferMessageRenderer from '../renderer/transferMessageRenderer';


//reader
import carTrackingInfoReader from '../../reader/carTrackingInfoReader';

//constants
import { STEP_TYPE } from '../../constants';

const STEP_TYPE_TO_MESSAGE_RENDERER = {
  [STEP_TYPE.TEST_DRIVE]: testDriveMessageRenderer,
  [STEP_TYPE.PAY_TOKEN]: textRenderer,
  [STEP_TYPE.APPLICATION]: textRenderer,
  [STEP_TYPE.DELIVERY]: textRenderer,
  [STEP_TYPE.TRANSFER]: transferMessageRenderer,
};

const StepInformation = React.memo(({ stepInfo, stepType }) => {

  const renderDate = () => {
    const startingDate = carTrackingInfoReader.getStartingDate(stepInfo);
    return startingDate && <div className="step-title">{startingDate}</div>
  };

  const renderStatus = () => {
    const startingDate = carTrackingInfoReader.getStartingDate(stepInfo),
      status = carTrackingInfoReader.getStatus(stepInfo);
    return (
      <div
        className={`${
          startingDate === null ? 'step-title ' : ''
          }step-status`}
      >
        {status}
      </div>
    );
  };

  const renderMessage = () => {
    const Component = STEP_TYPE_TO_MESSAGE_RENDERER[stepType],
      message = carTrackingInfoReader.getMessage(stepInfo);
    return (
      <div className="step-extra">
        <Component
          message={message}
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      {renderDate()}
      {renderStatus()}
      {renderMessage()}
    </React.Fragment>
  );
});

StepInformation.propTypes = {
  stepInfo: PropTypes.shape({

  }),
  stepType: PropTypes.string,
};

export default StepInformation;




