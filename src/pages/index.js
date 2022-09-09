import * as React from 'react'
import {
  container,
  heading,
  coverimg,
  description,
  contact,
  emphasis
} from './index.module.css'
import logo from '../images/logo.png'


const IndexPage = () => {
  return (
    <div>
      <div>
        <title>L'Oreille Active</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"></link>
      </div>
      <div>
        <div className={container}>
          <img src={logo} class={coverimg} alt="Logo" />
          <p className={description}>Groupe Prévention Détresse-Suicide - Saint Hilaire de Riez</p>
          <br />
          <h1 className={heading}>On arrive bientôt...</h1>
          <p className={description}>L'Oreille Active vous donne rendez-vous bientôt sur son site internet.</p>
          <p className={description}>En attendant n'hésitez pas à nous contacter :</p>
          <br />

          <p className={contact}> En nous rendant visite, tous les samedis de 10h à 12h <br /> à <span className={emphasis}>La Parée Verte, Chemin des Garennes, 85270 Saint Hilaire de Riez</span>. </p>
          <p className={contact}> ou par email à <span className={emphasis}>contactoreilleactive@gmail.com</span></p>
          <p className={contact}> ou par téléphone au <span className={emphasis}>07.62.76.20.86</span>, les dimanches de 19h à 21h.</p>

        </div>
      </div>
    </div>
  )
}
export default IndexPage