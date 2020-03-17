import kateStoneMatheson from './Kate-Stone-Matheson.jpg'
import karinaVorozheeva from './Karina-Vorozheeva.jpg'

const createCardData = (image, url, title, description) => ({ image, url, title, description })

export default [
  createCardData(kateStoneMatheson, 'https://unsplash.com/@kstonematheson', 'Kate Stone Matheson', 'White cat sleeps under white comforter.'),
  createCardData(karinaVorozheeva, 'https://unsplash.com/@_k_arinn', 'Karina Vorozheeva', "White butterfly resting on cat's nose.")
]
