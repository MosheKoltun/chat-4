import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../../chat_assignment_4/src/App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});