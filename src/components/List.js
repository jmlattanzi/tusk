import React from 'react'
import ListItem from './ListItem'
import styles from '../styles/List.module.css'

const list = (props) => (
    <div className={styles.Container}>
        <ListItem
            list={props.listData}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            handleInput={props.handleInput}
            handleEditSubmit={props.handleEditSubmit}
        />
    </div>
)

export default list
