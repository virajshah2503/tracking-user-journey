import React, { Component } from 'react';

//utils
import _map from 'lodash/map';

//components
import Loader from './components/loader';
import StepInformation from './components/stepInformation';

//service
import { getCarOrderData } from './services/carOrder';

//reader
import { getClassForTrackingInfo } from './helpers';

//css
import './App.css';

class App extends Component {

  state = {
    isLoaded: false,
  };

  componentDidMount() {
    getCarOrderData().then(data => {
      this.setState({
        isLoaded: true,
        carOrderData: data,
      });
    });
  };

  renderTitle() {
    return (<h1>Car Purchase Journey</h1>);
  }

  renderLoader() {
    return <Loader />
  };

  renderStepInfo = (stepInfo , stepType) => {
    const derivedClassName = getClassForTrackingInfo(stepInfo);
    return (
     <li
       key={stepType}
       className={`step-item ${derivedClassName}`}
     >
      <StepInformation
        stepInfo={stepInfo}
        stepType={stepType}
      />
     </li>
    )
  };

  renderTracking() {
    const { carOrderData } = this.state;
    return (
      <ul className="live-status">
        {_map(carOrderData, this.renderStepInfo)}
      </ul>
    )
  };

  render() {
    const { isLoaded } = this.state;
    return (
      <div className="App">
        <div className="order-tracking-container">
          {this.renderTitle()}
          {!isLoaded ? this.renderLoader() : this.renderTracking()}
        </div>
      </div>
    )
  }

}

export default App;
