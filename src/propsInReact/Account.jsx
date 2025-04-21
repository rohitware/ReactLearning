import React, { Component } from 'react';
import Student from './Student';

class Account extends Component {

    constructor(props) {
        super(props);
        this.year = 2025;
        this.remainingFee = 5000;
        // let obj = new Account();
    }

    render() {
        return (
            <>
                <h1>Account Details</h1>
                <Student year={this.year} remFee={this.remainingFee} />
            </>
        );
    }
}

export default Account;
