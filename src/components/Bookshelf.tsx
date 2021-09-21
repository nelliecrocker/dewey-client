import React, { Component } from 'react';

type Props = {
    token: string,
    updateToken(newToken: string): void
}

type Book = {
    title: string,
    author: string,
    genre: string,
    cover: string,
    sharedWith: string,
    sharedDate: string
}

type State = {
    // books: Book[],
    bookData: Book[]

}

class Bookshelf extends Component<Props, State>{
    state = {
        bookData: [{
            title: "",
            author: "",
            genre: "",
            cover: "",
            sharedWith: "",
            sharedDate: ""
        }]
    }


    componentDidMount() {
        this.displayBookData()
    }

    displayBookData = () => {
        fetch("http://localhost:3000/book/allbooks", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.props.token}`
            })
        })
            .then(res => res.json())
            .then((bookData) => this.setState({
                bookData: bookData,
            })
                // json => {
            //     this.setState({

            //         books: [{
            //             title: json.title,
            //             author: json.author,
            //             genre: json.genre,
            //             cover: json.cover,
            //             sharedWith: json.sharedWith,
            //             sharedDate: json.sharedDate
            //         }]
            //     })
            //     console.log(json)
            //     // ! this is a key piece...how to map to display at the interval
            //     console.log(json[0].title)

            // }
            )

            .catch(err => console.log(err))

    }
    //             let i: number = 0
    // {
    //     for (let i = 0; i < Bookshelf.length; i++)

    render() {
        return (
            <div>
                Bookshelf Data:
                {/* {this.state.books.map((i) => { return <li>{i}</li> })} */}
                {this.state.bookData.map((i) => {return <li>{i}</li>})}
                {this.displayBookData}
            </div>
        );
    }
}

export default Bookshelf;