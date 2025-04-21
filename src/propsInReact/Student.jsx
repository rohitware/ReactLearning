import React, { Component } from 'react';

class Student extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <h1>Student Details</h1>
                <h2>Year: {this.props.year} </h2>
                <h2>Remaining Fee: {this.props.remFee}</h2>
            </>
        );
    }
}

export default Student;
