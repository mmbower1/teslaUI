import React from 'react';
import './TeslaCar.scss';

const TeslaCar = ({ wheelsize }) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheelsize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheelsize}`}></div>
    </div>
  </div>
);

// TeslaCar.propTypes = {
//   wheelsize: React.PropTypes.number,
// }

export default TeslaCar;