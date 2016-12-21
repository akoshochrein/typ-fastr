import React from 'react';
import { Letter } from './Letter';

export class Text extends React.Component {
    render () {
        return (
            <div>
                {
                    this.props.value
                        ? this.props.value.split("").map((c, i) => <Letter key={i} value={c}/>)
                        : null
                }
            </div>
        );
    }
}