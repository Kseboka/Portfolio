import './NavBar.styles.css'

const NavBar = ({ onNavigate, navigation }) => {
  const handleClick = (data) => {
    onNavigate(data)
  }

  return (
    <nav className='nav-bar'>
      <ul className='nav-bar--list'>
        <li>
          <button onClick={() => handleClick(1)} className={`nav-bar--btn ${navigation === 1 ? 'active' : ''}`}>
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleClick(2)} className={`nav-bar--btn ${navigation === 2 ? 'active' : ''}`}>
            Portfolio
          </button>
        </li>
        <li>
          <button onClick={() => handleClick(3)} className={`nav-bar--btn ${navigation === 3 ? 'active' : ''}`}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
