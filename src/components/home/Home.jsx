import Section from '@/src/shared/section/Section'
import React from 'react'
import styles from './Home.module.css'
import Slider from './slider/Slider'

const bookmarkCard = [
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
]
const sliderCard = [
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
  {
    img:"https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser",
  },
]
const Home = () => {
  return (
    <div className={styles.home}>
      <Section heading={"Your Bookmarks"} cards={bookmarkCard}/>
      <Slider heading={"Your Bookmarks"} cards={sliderCard}/>
      <Section heading={"Your Bookmarks"} cards={bookmarkCard}/>
      
    </div>
  )
}

export default Home