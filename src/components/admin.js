import React, { Component } from 'react'

class Admin extends Component {
    render() {
        console.log('this.props', this.props);
        const { username } = this.props;

        return <div>Admin { username } </div>
    }
}

export default Admin