import React from 'react'
import rexcy from '../assets/rexcy.jpg'
import './UserCard.css';

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <h1 id='user-name'>{props.name}</h1>
        <img id='user-img' src={props.img} alt={props.name} />
        <h1 id='user-description'>{props.desc}</h1>
      
    </div>
  )
}

export default UserCard
