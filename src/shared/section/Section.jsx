import React from 'react'
import Card from '../card/Card'
import styles from './Section.module.css'

const Section = ({heading,cards}) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>
        {heading}
      </h1>
      <div className={styles.cardsSection}>
        {
          cards?.map((card,index)=>(
            <Card key={index} img={card.img} title={card.title} description={card.description}/>
          ))
        }
      </div>
    </div>
  )
}

export default Section