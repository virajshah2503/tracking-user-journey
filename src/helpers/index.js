
//reader
import carTrackingInfoReader from '../reader/carTrackingInfoReader';


export const getClassForTrackingInfo = stepInfo => {
  const startingDate = carTrackingInfoReader.getStartingDate(stepInfo),
    isStepCompleted = carTrackingInfoReader.isStepCompleted(stepInfo),
    inProcessingStep = startingDate !== null && !isStepCompleted;

  return isStepCompleted ? ' step-completed' : inProcessingStep ? ' step-current' : ' step-inCompleted';
};
