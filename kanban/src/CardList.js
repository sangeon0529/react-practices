import React from 'react'
import styles from './assets/css/CardList.css'
const CardList = ({title, Card}) => { // 맵 사용해서 ㄱㄱ
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <Card />
        <Card />
        <Card />
        <Card />

    </div>

  )
}

export default CardList