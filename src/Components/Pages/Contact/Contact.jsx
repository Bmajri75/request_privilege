import style from './Contact.module.scss'
import Header from '../../Header/Header'

function Contact() {
  return (
    <div>
      <Header/>
      <div className={`${style.container}`} >
        <div className={`${style.titleContainer}`} >
          <h2 className={`${style.title}`} >Formulaire de contact</h2>
        </div>
        <h4 className={`${style.subtitle}`}>Contactez Request & Privilege via ce formulaire ou à l'adresse: contact@requestandprivilegeconciergerie.com</h4>
        <form>
          <div>
            <h4>Votre prénom</h4>
            <input/>
          </div>
          <div>
            <h4>Votre nom</h4>
            <input />
          </div>
          <div>
            <h4>Objet de votre demande</h4>
            <input/>
          </div>
          <div className={`${style.yourMessage}`} >
            <h4>Votre message</h4>
            <textarea />
          </div>
        </form>
      </div>
    </div>
  )
}


export default Contact