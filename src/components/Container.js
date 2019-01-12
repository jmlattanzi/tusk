import React, { Component } from 'react'
import InputForm from './InputForm'
import List from './List'
// import { generateID } from '../utils/generateID'
import styles from '../styles/Container.module.css'

class Container extends Component {
    constructor() {
        super()

        this.state = {
            itemList: [
                {
                    content: 'test',
                    posted: '1/1/1970',
                    id: 0,
                    editMode: false,
                    editTime: '',
                },
            ],
            input: null,
        }
    }

    /////// HANDLERS /////////
    handleDelete = (id) => {
        // delete object at array index then update the state
        let arr = [...this.state.itemList]
        console.log('delete pressed on post with ID: ' + id)
        this.state.itemList.map((item, index) =>
            item.id === id ? arr.splice(index, 1) : 'post not found'
        )
        this.setState({ itemList: arr })
    }

    // handle setting a particular index's editMode to true onClick of the edit button
    handleEdit = (id) => {
        // find the index of id in this.state.itemList
        // and edit the content, push back onto the state

        // do it need to convert the content area to a textarea to edit it inline??
        // or maybe bring up a modal?

        // :big_think:
        let arr = [...this.state.itemList]
        this.state.itemList.map((item, index) =>
            item.id === id
                ? // click edit again and editMode is switched back to false
                  (arr[index].editMode = !arr[index].editMode)
                : (arr[index].editMode = false)
        )

        this.setState({
            itemList: arr,
        })

        console.log(`post selected for edit: ${id}`)
    }

    handleEditSubmit = (id) => {
        // so i'm making a separate submit method for this,
        // i don't think i need to but i'm too braindead right now to work it out
        let arr = [...this.state.itemList]

        // i need to return something here but i'm not sure what ¯\_(ツ)_/¯
        this.state.itemList.map((item, index) => {
            if (item.id === id && item.editMode) {
                arr[index].content = this.state.input
                arr[index].editMode = false
                arr[index].editTime = this.getDate()
            } else {
                return console.log('unable to submit edit')
            }
            // this is here just to get rid of the warning lol
            return null
        })

        console.log(arr)
        this.setState({ itemList: arr, input: '' })
    }

    handleInput = (e) => {
        // fix blankposting bruh
        if (e.target.value === '' || e.target.value === undefined) {
            console.log('error: input is required')
        } else {
            this.setState({ input: e.target.value })
        }
    }

    handleSubmit = () => {
        if (this.state.input !== ' ' || this.state.input !== null) {
            // copy the current form of this.state.itemList
            let arr = [...this.state.itemList]
            // craft a new object to be pushed onto this.state.itemList
            let post = {
                content: this.state.input,
                posted: this.getDate(),
                id: this.generateID(),
                editMode: false,
                editTime: '',
            }

            // push the crafted object onto our cloned array
            arr.push(post)
            // set our state array to our newly made one
            this.setState({ itemList: arr, input: '' })

            console.log(`input captured and submitted: ${this.state.input}`)
            console.log(arr)
        } else {
            console.log('Cannot submit a blank post')
        }
    }

    /////// UTIL FUNCTIONS ///////
    // just gimmie the time and date please ¯\_(ツ)_/¯
    getDate = () => {
        return new Date().toLocaleTimeString()
    }

    // generate some random number for the post ID, this way you are almost gauranteed a unique identifier
    generateID = () => {
        return Math.floor(Math.random() * new Date().getMilliseconds() ** 2)
    }

    /////// YE OLDE RENDER ////////
    render() {
        return (
            <div className={styles.Container}>
                <InputForm
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                />
                <List
                    listData={this.state.itemList}
                    value={this.state.input}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    handleInput={this.handleInput}
                    handleEditSubmit={this.handleEditSubmit}
                />
            </div>
        )
    }
}

export default Container
