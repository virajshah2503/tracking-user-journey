const carOrderData = {
  testDrive: {
    isStepCompleted: true,
    status: 'You have taken test drive',
    date: '08th, Aug 2019',
    messagePayload: {
      type: 'truncate',
      message: ['2014 Swift Vxi', '2015 Celerio Zxi', '2017 Tiago Xz'],
    },
  },
  payToken: {
    isStepCompleted: true,
    status: 'Pay Token',
    date: '10th, Aug 2019',
    messagePayload: {
      type: 'text',
      message: 'For 2014 Swift Vxi Petrol',
    },
  },
  application: {
    isStepCompleted: false,
    status: 'Processing your loan',
    date: '10th, Aug 2019',
    messagePayload: {
      type: 'text',
      message: 'Usually take 3-5 days.',
    },
  },
  delivery: {
    isStepCompleted: false,
    status: 'Take car Delivery',
    date: null,
    messagePayload: {
      type: 'text',
      message: 'From ABC Showroom,1st Floor,Golf Course Road, Gurugram 122002',
    },
  },
  transfer: {
    isStepCompleted: false,
    status: 'Start Ownership Transfer Process',
    date: null,
    messagePayload: {
      type: 'document',
      message: [
        'PAN Card',
        'Address Proof',
        'Proof of Insurance',
        'Form of Payment',
        'Recent pay stubs',
      ]
    },
  },
};

export default carOrderData;
