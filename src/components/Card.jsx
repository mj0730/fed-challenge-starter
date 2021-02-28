import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from './BackgroundImage';
import TrainerIcon from './TrainerIcon';
import Info from './Info';

function Card({ image, title, time, distance, workouts, onClick, activeCard }) {
  const thumb = `./images/${image}thumb.jpg`;
  const trainer = `./images/${image}trainer.jpg`;
  const isActive = title === activeCard ? true : false;

  return (
    <div id={title} className={isActive ? 'card active' : `card`} onClick={onClick}>
      <BackgroundImage thumb={thumb} workouts={workouts} />
      <div className='title'>
        {title}
        <TrainerIcon icon={trainer} />
      </div>
      <Info time={time} distance={distance} />
      <div className='details'>{isActive ? <a href='./#'>VIEW DETAILS</a> : <span>&nbsp;</span>}</div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  workouts: PropTypes.number.isRequired,
  activeCard: PropTypes.string.isRequired,
};
