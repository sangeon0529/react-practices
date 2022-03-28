import React from 'react'
import styles from './assets/scss/Email.scss'
import PropTypes from 'prop-types'

export default function Email ({no,firstName,lastName,email}) {
  
  return (
    <li className={styles.Email}>
        <h4>{firstName}{lastName}</h4>
        <br/>
        <span>{email}</span>
    </li>
  )
}

Email.propType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}