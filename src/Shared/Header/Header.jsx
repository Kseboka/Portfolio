import styles from './Header.module.css'

const Header = ({ children }) => {
  return (
    <header>
      <h2 className={styles.headerTitle}>{children}</h2>
      <div className={styles.underline}></div>
    </header>
  )
}

export default Header
