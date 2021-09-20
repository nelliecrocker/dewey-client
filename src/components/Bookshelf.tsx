import React, { Component } from 'react';

type Props = {
    token: string,
    updateToken(newToken: string): void
}

type State = {
    book: {
        title: string,
        author: string,
        genre: string,
        cover: string,
        sharedWith: string,
        sharedDate: string
    }
}


class Bookshelf extends Component<Props, State>{
    state = {
        book: {
            title: "",
            author: "",
            genre: "",
            cover: "",
            sharedWith: "",
            sharedDate: ""
        }
    }

    // displayBookData = (allBookData: string) => {
    //     this.setState(prevState => ({
    //         bookDataArray: [...prevState.bookDataArray, allBookData],
    //     }))
    // }

    displayBookData = () => {
        fetch("http://localhost:3000/book/allbooks", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.props.token}`
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                console.log(data)
                })

        .catch (err => console.log(err))
}



componentDidMount() {
    this.displayBookData()
}

render() {
    return (
        <div>
            Bookshelf Data:
            {/* {this.state.data.map((book) => {return <li>{book}</li>})} */}
        </div>
    );
}
}

export default Bookshelf;