import React from 'react';
import { render } from '@testing-library/react';
import TextReader from './index';
import "test.txt";

test('renders text from a file', () => {
    const { getByText } = render(<TextReader text={test.txt} />);
    const textElement = getByText(/This is a test./i);
    expect(textElement).toBeInTheDocument();
});