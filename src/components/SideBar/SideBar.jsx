import { useState } from 'react'
import Avatar from '../../Assets/Avatar.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Card from '../../Shared/Card/Card'
import Separator from '../../Shared/Separator/Separator'
import './SideBar.styles.css'

const SideBar = () => {
  const [active, setActive] = useState(false)

  return (
    <aside className={`side-bar ${active ? 'active' : ''}`}>
      <button onClick={() => setActive(!active)} className='side-bar--toggle'>
        <KeyboardArrowDownIcon />
      </button>
      <Card noBorder={true}>
        <div className='side-bar--profile'>
          <img src={Avatar} alt='' />
          <div className='side-bar--profile-info'>
            <h1>Kalkidan Seboka</h1>
            <p>FullStack Developer</p>
          </div>
        </div>
        <Separator />
        <ul className='side-bar--socials'>
          <li>
            <EmailOutlinedIcon className='side-bar--icons' />
            <div>
              <p>Email</p>
              <small>
                <a href='mailto:sebokaa.k@gmail.com' target='_blank' rel='noreferrer'>
                  sebokaa.k@gmail.com
                </a>
              </small>
            </div>
          </li>
          <li>
            <LinkOutlinedIcon className='side-bar--icons' />
            <div>
              <p>GitHub</p>
              <small>
                <a href='https://github.com/Kseboka' target='_blank' rel='noreferrer'>
                  github.com/Kseboka
                </a>
              </small>
            </div>
          </li>
          <li>
            <LinkOutlinedIcon className='side-bar--icons' />
            <div>
              <p>Linkedin</p>
              <small>
                <a href='https://www.linkedin.com/in/kalkidan-seboka/' target='_blank' rel='noreferrer'>
                  linkedin.com/in/kalkidan-seboka
                </a>
              </small>
            </div>
          </li>
          <li>
            <LocationOnOutlinedIcon className='side-bar--icons' />
            <div>
              <p>Location</p>
              <small>Minnesota</small>
            </div>
          </li>
        </ul>
      </Card>
    </aside>
  )
}

export default SideBar
