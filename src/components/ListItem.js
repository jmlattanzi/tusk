import React from 'react'
import styles from '../styles/ListItem.module.css'
import 'font-awesome/css/font-awesome.min.css'

const listItem = (props) =>
    props.list.map((item) => (
        <div className={styles.ItemContainer} key={item.id}>
            <div className={styles.Item}>
                <div className={styles.Content}>
                    <p>{item.content}</p>
                    <div
                        className={
                            item.editMode ? styles.EditBox : styles.Hidden
                        }>
                        <input
                            type='text'
                            className={styles.InputBox}
                            onChange={(e) => props.handleInput(e)}
                        />
                        <button
                            className={styles.Submit}
                            onClick={(id) => props.handleEditSubmit(item.id)}>
                            edit
                        </button>
                    </div>
                </div>
                <div className={styles.Controls}>
                    <div className='Edit'>
                        <span
                            role='img'
                            aria-label='font-awesome icon'
                            onClick={(id) => props.handleEdit(item.id)}>
                            <i className='fa fa-edit' />
                        </span>
                    </div>
                    <div className='Delete'>
                        <span
                            role='img'
                            aria-label='font-awesome icon'
                            onClick={(id) => props.handleDelete(item.id)}>
                            <i className='fa fa-times' />
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.Date}>
                {item.editTime === ''
                    ? `Posted: ${item.posted}`
                    : `Edited: ${item.editTime}`}
            </div>
        </div>
    ))

export default listItem
