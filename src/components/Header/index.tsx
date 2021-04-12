import React from 'react';

import * as S from './styles';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../contexts/auth';
import Profile from '../Profile';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <S.Header>
      <S.HeaderContent>
        <img
          src={'https://poupachef.com/static/media/logo.p_white.b7170838.png'}
          alt="Poupachef"
        />

        <S.ProfileWrapper>
          <Profile user={user} />

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </S.ProfileWrapper>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
