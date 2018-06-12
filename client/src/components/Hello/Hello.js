import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            message: ''
        }
        this.updateMessage = this.updateMessage.bind( this );
        this.callHello = this.callHello.bind( this );
    }
    async callHello() {
        const response = await fetch( '/api/hello' );
        const body = await response.json();

        if ( response.status !== 200 ) throw Error( body.message )

        return body;
    }

    updateMessage() {
        this.callHello()
            .then( res => {
                this.setState( { message: res.message } )
            } )
            .catch( err => {
                console.log( err );
            } )
    }

    componentDidMount() {
        this.updateMessage();
    }

    render() {
        return (
            <div className="Hello">
                <h1>{this.state.message}</h1>
                <button onClick={this.updateMessage}>Refresh message</button>
            </div>
        );
    }
}

export default Hello;
