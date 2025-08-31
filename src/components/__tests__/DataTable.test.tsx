import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataTable } from '../DataTable';

const mockData = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
];

const mockColumns = [
  { key: 'id', title: 'ID', dataIndex: 'id' as const },
  { key: 'name', title: 'Name', dataIndex: 'name' as const },
  { key: 'age', title: 'Age', dataIndex: 'age' as const },
];

describe('DataTable', () => {
  it('renders table headers correctly', () => {
    render(<DataTable data={mockData} columns={mockColumns} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders table data correctly', () => {
    render(<DataTable data={mockData} columns={mockColumns} />);
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<DataTable data={[]} columns={mockColumns} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows empty state when no data', () => {
    render(<DataTable data={[]} columns={mockColumns} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('renders select column when selectable', () => {
    render(<DataTable data={mockData} columns={mockColumns} selectable />);
    expect(screen.getByText('Select')).toBeInTheDocument();
  });
});