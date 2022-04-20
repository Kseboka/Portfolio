import './About.styles.css'
import Card from '../../Shared/Card/Card'
import Header from '../../Shared/Header/Header'

import IconData from '../../data/IconData'

const About = ({ navigation }) => {
  return (
    <article className={`about ${navigation === 1 ? 'active' : ''}`}>
      <Card>
        <Header>About Me</Header>
        <p>
          I am a full-stack developer specializing in the MERN stack. I have knowledge of a variety of topics and protocols and have strong foundations in technology. I am self-taught and keep myself
          up to date with the ever-changing technology world by learning new programming languages, libraries, and other skills. I am eager to gain as much experience as possible in any position.
        </p>
        <h3 className='about-tech'>Tech Stack</h3>
        <div className='about-tech--items'>
          {IconData.map((icon) => {
            return (
              <Card alt={true}>
                <img className='about-tech--icon' src={icon.source} />
              </Card>
            )
          })}
        </div>
      </Card>
    </article>
  )
}

export default About
