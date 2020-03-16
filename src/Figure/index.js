import React from 'react'
import styles from './index.module.css'
import christianHolzinger from './Christian-Holzinger.jpg'
import nitishMeena from './Nitish-Meena.jpg'

const figures = {
  'Christian Holzinger': {
    src: christianHolzinger,
    href: 'https://unsplash.com/@pixelatelier'
  },
  'Nitish Meena': {
    src: nitishMeena,
    href: 'https://unsplash.com/@nitishm'
  }
}

const Figure = ({ author }) => {
  const { src, href } = figures[author]

  return (
    <figure className={styles.root}>
      <img src={src} alt={author} />
      <figcaption>Photo by <a href={href}>{author}</a> (cropped)</figcaption>
    </figure>
  )
}

export default Figure
