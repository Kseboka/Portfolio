import styles from '../BtnLink/BtnLink.module.css'

const BtnLink = ({ link, children }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className={`${styles.BtnLink}`}>
      {children}
    </a>
  )
}

export default BtnLink
