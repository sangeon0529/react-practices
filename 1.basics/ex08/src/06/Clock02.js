import React from 'react'

const Clock02 = () => {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
        <div>
            {('0' + (hour > 12 ? hour -12 : hour)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)}
            {' : '}
            {('0' + seconds).slice(-2)}
            { ' '}
            {hour > 12 ? 'PM' : 'AM'} 
        </div>
    )
  }

export default Clock02