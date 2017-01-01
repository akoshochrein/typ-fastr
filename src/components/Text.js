import React from 'react';
import { Letter } from './Letter';
import { connect } from 'react-redux';
import { incrementCursor } from '../actions';

export class TextComponent extends React.Component {
    render () {
        return (
            <div tabIndex="0" onKeyDown={this.props.incrementCursor}>
                {
                    this.props.text
                        ? this.props.text.map((letter) =>
                            <Letter
                                key={letter.index}
                                value={letter.charVal}
                                index={letter.index}
                                isCurrent={letter.index === this.props.cursorPosition}
                                state={letter.state} />)
                        : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text,
        cursorPosition: state.cursorPosition
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCursor: () => {
            dispatch(incrementCursor())
        }
    };
};

export const Text = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextComponent);
