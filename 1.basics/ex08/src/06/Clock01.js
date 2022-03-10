import React from 'react'

const Clock01 = () => {
  const date = new Date()

  let hour = date.getHours()
  let session = 'AM'
  if(hour > 12) {
    session = 'PM'
  }

  hour = ('0'+hour).slice(-2);
  const minutes = ('0'+date.getMinutes()).slice(-2);
  const seconds = ('0'+date.getSeconds()).slice(-2);

  return (
    <div>{hour}:{minutes}:{seconds} {session} </div>
  )
}

export default Clock01