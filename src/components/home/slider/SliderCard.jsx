import React from 'react'
import styles from './Card.module.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Card = ({img,title,description}) => {
  return (
    <div className={styles.card}>
        <div>
            <img src={img} alt="img" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      <div className={styles.save}>
        <BookmarkBorderIcon/>
      </div>
    </div>
  )
}

export default Card