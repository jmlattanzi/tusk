import React from 'react'
import styles from '../styles/Header.module.css'

const header = (props) => (
    <div className={styles.Container}>
        <div className={styles.Logo}>
            <h2>tusk</h2>
        </div>
        <div className={styles.Links}>
            <div className={styles.LinkItem}>
                <a href='google' className={styles.Link}>
                    link
                </a>
            </div>
            <div className={styles.LinkItem}>
                <a href='google' className={styles.Link}>
                    link
                </a>
            </div>
            <div className={styles.LinkItem}>
                <a href='google' className={styles.Link}>
                    link
                </a>
            </div>
        </div>
    </div>
)

export default header
