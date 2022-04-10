import React, { Component } from 'react';
import axios from 'axios';
import Bug from './Bug';

class BugTracker extends Component {
    state = {
        bugs: [],
    };

    componentDidMount() {
        this.getBugs();
    }

    getBugs = () => {
        axios
            .get('/api/bugs')
            .then((res) => {
                if (res.data) {
                    this.setState({
                        bugs: res.data,
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    render() {

        let { bugs } = this.state;

        return (
            <Bug bugs={bugs} />
        );
    }
}

export default BugTracker;