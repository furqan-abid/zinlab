import Section from '@/src/shared/section/Section'
import React from 'react'
import styles from './Home.module.css'
import { bookmarkCard, converFromPdf, convertToPDF, sliderCard } from './homeData'
import Slider from './slider/Slider'

const Home = () => {
  return (
    <div className={styles.home}>
      <Section heading={"Your Bookmarks"} cards={bookmarkCard}/>
      <Slider heading={"Convert from PDF"} cards={converFromPdf}/>
      <Section heading={"Convert from PDF"} cards={converFromPdf}/>
      <Section heading={"Convert to PDF"} cards={convertToPDF}/>
      
    </div>
  )
}

export default Home