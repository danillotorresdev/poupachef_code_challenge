import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Profile, { ProfileProps } from '.';

export default {
  title: 'Components/Profile',
  component: Profile,

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'poupachef',
      values: [
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'poupachef',
          value: '#5bada6',
        },
      ],
    },
  },
} as Meta;

export const Default: Story<ProfileProps> = () => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
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
    />
  </div>
);
