import styles from './Card.module.css'

const Card = ({ children, alt, noBorder, lol }) => {
  return <div className={`${styles.card} ${alt ? styles.alt : ''} ${noBorder ? styles.noBorder : ''} `}>{children}</div>
}

export default Card
