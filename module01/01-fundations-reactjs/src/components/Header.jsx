import styles from "./Header.module.css"

import logo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="IgniteFeed logo" />
      <h1>Ignite Feed</h1>
    </header>
  )
}
