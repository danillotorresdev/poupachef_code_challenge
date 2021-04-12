import React from 'react';
import { render } from '@testing-library/react';
import Profile from './';

describe('Profile Page', () => {
  it('should render Profile', async () => {
    const { getByText } = render(
      <Profile
        user={{
          id: '123',
          name: 'João',
          email: 'joao@poupachef.com',
          avatar_url:
            'https://media-exp1.licdn.com/dms/image/C4D03AQGoYF-af_zgRQ/profile-displayphoto-shrink_800_800/0/1589375606481?e=1623283200&v=beta&t=wpYMgOsMZwswIYa7lxMixGp81ON6deJ3sz8oEqzDTRQ',
          phone_number: '123456789',
          address: 'Rua do Joao',
          address_number: '123456',
          complement: 'Em frente a cabana da dona Maria',
          neighborhood: 'Bairro do João',
          city: 'Jão do Norte',
          state: 'Jãozil',
          zipCode: '1234567',
        }}
      />,
    );

    expect(getByText(/Bem vindo/i)).toBeInTheDocument;
    expect(getByText(/João/i)).toBeInTheDocument;
  });
});
