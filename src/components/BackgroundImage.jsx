import React from 'react';
import PropTypes from 'prop-types';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

function BackgroundImage({ thumb, workouts }) {
  const showWorkoutsOverlay = workouts > 1 ? true : false;

  return (
    <div className='image' style={{ backgroundImage: `url(${thumb})` }}>
      {showWorkoutsOverlay && (
        <div className='workouts-overlay'>
          <span className='workouts-number'>{workouts}</span> WORKOUTS <PlaylistPlayIcon />
        </div>
      )}
    </div>
  );
}

export default BackgroundImage;

BackgroundImage.propTypes = {
  thumb: PropTypes.string.isRequired,
  workouts: PropTypes.number.isRequired,
};
