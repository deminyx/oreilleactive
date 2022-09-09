import * as React from 'react'
import {
  container,
  heading,
  coverimg,
  description
} from './index.css'


const IndexPage = () => {
  return (
  <div>
    <div>
      <title>L'Oreille Active</title>
        <link rel="shortcut icon" href="favicon.ico"/>
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"></link>
    </div>
    <div>
      <div className={container}>
        <img src="images/icon.png" class={coverimg} alt="Logo"/>
        <h1 className={heading}>On arrive bientôt...</h1>
        <p className={description}>L'Oreille Active vous donne rendez-vous bientôt sur son site internet.</p>
      </div>
    </div>
    </div>
)}
export default IndexPage