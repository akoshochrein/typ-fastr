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
                        ? this.props.text.map((c, i) =>
                            <Letter key={i} value={c} index={i} isCurrent={i === this.props.cursorPosition} />)
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
