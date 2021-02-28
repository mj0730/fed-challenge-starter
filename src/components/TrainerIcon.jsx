import React from 'react';
import PropTypes from 'prop-types';

function TrainerIcon({ icon }) {
  return <img className='trainer-icon' src={icon} alt='Trainer Icon' />;
}

export default TrainerIcon;

TrainerIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};
