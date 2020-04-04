import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

test('renders learn react link', () => {
    const { getByText } = render(<App history={history} />);
    const linkElement = getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
});
