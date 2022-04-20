import './Portfolio.styles.css'
import Header from '../../Shared/Header/Header'
import Card from '../../Shared/Card/Card'
import BtnLink from '../../Shared/BtnLink/BtnLink'
import CryptoTracker from '../../Assets/CryptoTracker.png'
import Noter from '../../Assets/Noter.png'

const Portfolio = ({ navigation }) => {
  return (
    <article className={`portfolio ${navigation === 2 ? 'active' : ''}`}>
      <Card>
        <Header>Portfolio</Header>
        <div className='portfolio-projects'>
          <Card>
            <img src={CryptoTracker} alt='' />
            <div>
              <h4>CryptoTracker</h4>
              <div className='portfolio-btn--container'>
                <BtnLink link={'https://github.com/Kseboka/crypto-tracker'}>GitHub</BtnLink>
                <BtnLink link={'https://competent-lalande-e472af.netlify.app/'}>Demo</BtnLink>
              </div>
            </div>
          </Card>
          <Card>
            <img src={Noter} alt='' />
            <div>
              <h4>Noter</h4>
              <div className='portfolio-btn--container'>
                <BtnLink link={'https://www.google.com'}>GitHub</BtnLink>
                <BtnLink link={'https://thenoterapp.netlify.app/'}>Demo</BtnLink>
              </div>
            </div>
          </Card>
          <Card>
            <img src={Noter} alt='' />
            <div>
              <h4>Porject #</h4>
              <div className='portfolio-btn--container'>
                <BtnLink link={'https://www.google.com'}>GitHub</BtnLink>
                <BtnLink link={'https://www.google.com'}>Demo</BtnLink>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </article>
  )
}

export default Portfolio
