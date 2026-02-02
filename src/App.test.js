// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ForgeViem title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ForgeViem/i);
    expect(titleElement).toBeInTheDocument();
});
