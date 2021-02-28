import React, { useState } from 'react';
import Card from './components/Card';
import './global.css';

const data = [
  {
    title: 'Lake Inniscarra, Ireland— Pyramid',
    time: '30:53',
    distance: '6,428 M',
    workouts: 1,
    image: 'lake-inniscarra-',
  },
  {
    title: 'Performance Series',
    time: '',
    distance: '',
    workouts: 9,
    image: 'performance-series-',
  },
  {
    title: 'Slow Pulls and Fast Intervals',
    time: '44:13',
    distance: '9,948 M',
    workouts: 1,
    image: 'slow-pulls-',
  },
  {
    title: '20 Minutes to Toned',
    time: '',
    distance: '',
    workouts: 12,
    image: '20-minutes-to-toned-',
  },
  {
    title: 'Charles Race, Boston, Massachusetts',
    time: '36:22',
    distance: '8,648 M',
    workouts: 1,
    image: 'charles-race-',
  },
  {
    title: 'FullBody HIIT Series',
    time: '',
    distance: '',
    workouts: 12,
    image: 'full-body-hiit-',
  },
  {
    title: 'Kafue River, Zambia— Power Stroke Pyramid',
    time: '22:22',
    distance: '4,660 M',
    workouts: 1,
    image: 'kafue-river-',
  },
  {
    title: 'Shred & Burn Series',
    time: '',
    distance: '',
    workouts: 16,
    image: 'shred-and-burn-',
  },
];

function App() {
  const [activeCard, setactiveCard] = useState('');

  return (
    <div className='app'>
      {data.map((card) => {
        return (
          <Card
            key={card.title}
            image={card.image}
            title={card.title}
            time={card.time}
            distance={card.distance}
            workouts={card.workouts}
            onClick={() => setactiveCard(card.title)}
            activeCard={activeCard}
          />
        );
      })}
    </div>
  );
}

export default App;
