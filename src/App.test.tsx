import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
    const renderedItem = render(<App />);
    expect(renderedItem).not.toBeNull();
});
