import React from 'react'
import styles from '../styles/Input.module.css'
import Button from './Button'

const inputForm = (props) => (
    <form className={styles.Container} onSubmit={(e) => props.handleSubmit(e)}>
        <input
            className={styles.InputBox}
            type='text'
            placeholder='type'
            onChange={(e) => props.handleInput(e)}
            value={props.value}
        />
        <Button />
    </form>
)

export default inputForm
