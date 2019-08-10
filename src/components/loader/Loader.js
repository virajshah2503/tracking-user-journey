import React from 'react';

//icons
import loadingIcon from '../../asset/img/loader.gif';

const Loader = () => {
  return (
    <React.Fragment>
        <img src={loadingIcon}  height="150px" alt="Loading...." />
    </React.Fragment>
  )
};

export default Loader;
