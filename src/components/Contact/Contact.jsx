import './Contact.styles.css'
import Header from '../../Shared/Header/Header'
import Card from '../../Shared/Card/Card'
import emailjs from 'emailjs-com'

const Contact = ({ navigation }) => {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_EMAILJS_API_KEY}`).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )

    e.target.reset()
  }

  return (
    <article className={`contact ${navigation === 3 ? 'active' : ''}`}>
      <Card>
        <Header>Contact Me</Header>
        <form className='contact-form' onSubmit={sendEmail}>
          <div className='contact-userInfo'>
            <input placeholder='Name...' type='text' name='name' required />
            <input placeholder='Email Address...' type='Email' name='Email' required />
          </div>
          <div className='contact-userMessage'>
            <textarea placeholder='Message...' name='message' id='' cols='40' rows='10' required></textarea>
          </div>
          <button className='contact-submit' type='submit'>
            Send
          </button>
        </form>
      </Card>
    </article>
  )
}

export default Contact
