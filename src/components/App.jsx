import React from 'react';
import { Letter } from './Letter';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Letter value="a" />
                <Letter value="l" />
                <Letter value="m" />
                <Letter value="a" />
                <Letter value="f" />
                <Letter value="a" />
                <Letter value=" " />
                <Letter value="s" />
                <Letter value="u" />
                <Letter value="p" />
                <Letter value="d" />
                <Letter value="a" />
                <Letter value="w" />
                <Letter value="g" />
            </div>
        );
    }
}
