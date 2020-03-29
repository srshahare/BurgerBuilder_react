import { Component } from 'react';
// This is hoc component
class Container extends Component {
    render(){
        return(
            this.props.children
        );
    }
};

export default Container;