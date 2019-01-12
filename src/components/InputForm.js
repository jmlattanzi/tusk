import React from 'react'
import styles from '../styles/Input.module.css'
import Button from './Button'

const inputForm = (props) => (
    <div className={styles.Container}>
        <input
            className={styles.InputBox}
            type='text'
            placeholder='type'
            onChange={(e) => props.handleInput(e)}
            value={props.value}
        />
        <Button click={props.handleSubmit} />
    </div>
)

export default inputForm
