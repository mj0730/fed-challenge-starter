import React from 'react';
import PropTypes from 'prop-types';
import TimerIcon from '@material-ui/icons/Timer';
import RowingIcon from '@material-ui/icons/Rowing';

function Info({ time, distance }) {
  const iconStyle = {
    width: '.6rem',
    height: '.6rem',
  };

  return time === '' ? (
    <div className='info'>&nbsp;</div>
  ) : (
    <div className='info'>
      <span>
        <TimerIcon style={iconStyle} />
        {time}
      </span>
      <RowingIcon style={iconStyle} />
      {distance}
    </div>
  );
}

export default Info;

Info.propTypes = {
  time: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
};
