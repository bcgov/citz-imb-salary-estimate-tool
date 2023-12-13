import React from 'react';
import { render } from '@testing-library/react';
import { RolesCell } from './RolesCell';

describe('RolesCell Component', () => {
  it('renders a Chip for each role', () => {
    const roles = ['Admin', 'User', 'Guest'];
    const { getByText } = render(<RolesCell value={roles} />);

    roles.forEach((role) => {
      expect(getByText(role)).toBeInTheDocument();
    });
  });

  it('renders no Chip when no roles are provided', () => {
    const { container } = render(<RolesCell value={[]} />);

    // Check if container is empty
    expect(container.firstChild).toBeFalsy();
  });
});
