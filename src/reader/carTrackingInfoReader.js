
//utils
import _property from 'lodash/property';
import _get from 'lodash/get';

const READER = {
  isStepCompleted: _property('isStepCompleted'),

  getStartingDate(stepInfo){
    return _get(stepInfo, 'date');
  },

  getStatus: _property('status'),

  getMessage(stepInfo){
    return _get(stepInfo, 'messagePayload.message');
  }
};

export default READER;
