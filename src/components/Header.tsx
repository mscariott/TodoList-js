import rocketLogo from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Imagem de um foguete decolando" />
      <span>to</span><span>do</span>
    </header>
  )
}