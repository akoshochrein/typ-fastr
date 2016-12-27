import React from 'react';
import { connect } from 'react-redux';
import { Text } from './Text';

export class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <Text />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export const App = connect(mapStateToProps)(AppContainer);
