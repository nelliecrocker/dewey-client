import { Component } from 'react'
import { Login, Register } from '../auth/index'
import { CreateBook, Profile, Navbar } from '../components/Index'

type Props = {
    token: string,
    updateToken(newToken: string): void
}


class Home extends Component<Props, {}> {
    constructor(props:Props){
        super(props)
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
                <Login />
                <Register />
            </div>
        );
    }
}

export default Home;