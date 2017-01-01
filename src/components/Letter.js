import React from 'react';
import extend from 'extend';

const letterBaseStyle = {
    color: '#aaaaaa',
    fontSize: '36px',
    borderLeft: '1px solid transparent'
};

const currentLetterStyle = extend({}, letterBaseStyle, {
    borderLeft: '1px solid #000000'
});

const missedLetterStyle = extend({}, letterBaseStyle, {
    color: '#c13232'
});

const hitLetterStyle = extend({}, letterBaseStyle, {
    color: '#000000'
});

export class Letter extends React.Component {
    render () {
        let currentStyle = letterBaseStyle;
        if (1 === this.props.state) currentStyle = hitLetterStyle;
        if (this.props.isCurrent) currentStyle = currentLetterStyle;
        return (
            <span style={currentStyle}>{this.props.value}</span>
        );
    }
}
