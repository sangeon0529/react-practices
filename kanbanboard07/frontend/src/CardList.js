import React from 'react'
import styles from './assets/css/CardList.css'
import Card from './Card.js'
const CardList = ({title, cards}) => { // 맵 사용해서 ㄱㄱ
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        {cards.map((e) => <Card
                            key={e.no}
                            no={e.no}
                            title={e.title}
                            description={e.description}

        />)}
    </div>

  )
}

export default CardList