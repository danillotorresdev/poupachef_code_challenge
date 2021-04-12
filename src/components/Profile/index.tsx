import React from 'react';
import { User } from '../../contexts/auth';
import * as S from './styles';

export type ProfileProps = {
  user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }: ProfileProps) => {
  return (
    <S.Profile>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <span>Bem vindo</span>
        <strong>{user.name}</strong>
      </div>
    </S.Profile>
  );
};

export default Profile;
