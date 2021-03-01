
import React from 'react';

export default class NotefulError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if(this.state.hasError) {
            return (
                <h2>Something went wrong when loading this component.</h2>
            );
        }
        return this.props.children;
    }
}

