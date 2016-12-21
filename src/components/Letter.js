import React from 'react';

const letterBase = {
    color: 'black',
    fontSize: '36px',
    borderLeft: '1px solid transparent'
};

export class Letter extends React.Component {
    render () {
        return (
            <span style={letterBase}>{this.props.value}</span>
        );
    }
}
