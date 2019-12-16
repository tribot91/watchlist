import React from 'react';
import './RatingBar.scss'

var RatingBar = ({ rating }) => {
  return (
    <div className='parent-rating-bar'>
      <div className='child-rating-bar gray-bg'/>
      <div className='child-rating-bar orange-bg' style={{ width: `${10 * rating}%` }} />
    </div>
  );
}

export default RatingBar;