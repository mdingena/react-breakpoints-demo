import karinaVorozheeva from './Karina-Vorozheeva.jpg'
import nirzarPangarkar from './Nirzar-Pangarkar.jpg'
import ramizDedakovic from './Ramiz-Dedakovic.jpg'
import ericHan from './Eric-Han.jpg'
import bielMorro from './Biel-Morro.jpg'
import koenEijkelenboom from './Koen-Eijkelenboom.jpg'
import kateStoneMatheson from './Kate-Stone-Matheson.jpg'

const createCardData = (image, url, title, description) => ({ image, url, title, description })

export default [
  createCardData(karinaVorozheeva, 'https://unsplash.com/@_k_arinn', 'Karina Vorozheeva', "White butterfly resting on cat's nose."),
  createCardData(nirzarPangarkar, 'https://unsplash.com/@nirzar', 'Nirzar Pangarkar', 'Short-fur white and black cat on green textile.'),
  createCardData(ramizDedakovic, 'https://unsplash.com/@ramche', 'Ramiz Dedaković', 'Shallow focus photography of brown tabby cat.'),
  createCardData(ericHan, 'https://unsplash.com/@madeyes', 'Eric Han', 'Cat licking its paw.'),
  createCardData(bielMorro, 'https://unsplash.com/@bielmorro', 'Biel Morro', 'Selective focus photography of gray cat peeking at the table.'),
  createCardData(koenEijkelenboom, 'https://unsplash.com/@camhiheh', 'Koen Eijkelenboom', 'Gray tabby kitten on tree.'),
  createCardData(kateStoneMatheson, 'https://unsplash.com/@kstonematheson', 'Kate Stone Matheson', 'White cat sleeps under white comforter.'),
  
]
