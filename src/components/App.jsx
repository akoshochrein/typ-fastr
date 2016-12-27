import React from 'react';
import { connect } from 'react-redux';
import { Text } from './Text';
import { incrementCursor } from '../actions';

export class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <Text
                    cursorPosition={this.props.cursorPosition}
                    incrementCursor={this.props.incrementCursor}
                    value="almafa supdawg"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cursorPosition: state.cursorPosition
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCursor: () => {
            dispatch(incrementCursor());
        }
    }
};

export const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
