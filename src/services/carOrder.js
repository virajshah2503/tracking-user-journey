// mock data

import carOrderData from '../mockData/carOrderData';

export const getCarOrderData = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(carOrderData);
  }, 1500);
});

