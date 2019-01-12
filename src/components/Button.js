import React from 'react'
import styles from '../styles/Button.module.css'

const button = (props) => (
    <button className={styles.Submit} onClick={() => props.click()}>
        create
    </button>
)

export default button
