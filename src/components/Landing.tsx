import React, { Component } from 'react'
import { Register, Login, Navbar } from './Index'


class Landing extends Component {

    render() {
        return (
            <div>
                <div>
                    <div>
                        <Navbar />
                    </div>
                </div>
                <hr/>
                <div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Landing