import React from 'react';
class Footer extends React.Component {
    render () {
        return <p>Authored by {this.props.author}</p>;
    }
}
export default Footer;