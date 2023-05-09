import styles from './Header.module.css'

import ignitelogo from '../ignitelogo/logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={ignitelogo} alt='Logotipo do ignte' />
        </header>
    )
}