import React from 'react';
import { Letter } from './Letter';

export class Text extends React.Component {
    render () {
        return (
            <div tabIndex="0" onKeyDown={this.props.incrementCursor}>
                {
                    this.props.value
                        ? this.props.value.split("").map((c, i) =>
                            <Letter key={i} value={c} index={i} isCurrent={i == this.props.cursorPosition} />)
                        : null
                }
            </div>
        );
    }
}