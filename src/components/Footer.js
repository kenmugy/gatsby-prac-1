import React from 'react';
import styles from './footer.module.css'

export default ({children}) => (
    <footer>
        <div className={styles.container}>
            {children}
        </div>
    </footer>
)