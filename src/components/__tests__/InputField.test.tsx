import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputField } from '../InputField';

describe('InputField', () => {
  it('renders with label', () => {
    render(<InputField label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<InputField placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('shows error message when invalid', () => {
    render(<InputField invalid errorMessage="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('shows helper text when provided', () => {
    render(<InputField helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('applies disabled state correctly', () => {
    render(<InputField disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });
});