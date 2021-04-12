import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

export type User = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  phone_number: string;
  address: string;
  address_number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
  postmanToken: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): 'AUTHENTICATED' | 'REFUSED';
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Poupachef:token');
    const user = localStorage.getItem('@Poupachef:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(
    ({ email: emailFromForm, password: passwordFromForm, postmanToken }) => {
      const mockedResponse = {
        email: 'danillo@poupachef.com',
        password: '12345',
      };
      const { email, password } = mockedResponse;

      if (
        postmanToken &&
        password === passwordFromForm &&
        email === emailFromForm
      ) {
        const user = {
          id: '1',
          name: 'Danillo Ewerton',
          email: 'danillo@poupachef.com',
          avatar_url:
            'https://media-exp1.licdn.com/dms/image/C4D03AQGoYF-af_zgRQ/profile-displayphoto-shrink_800_800/0/1589375606481?e=1623283200&v=beta&t=wpYMgOsMZwswIYa7lxMixGp81ON6deJ3sz8oEqzDTRQ',
          phone_number: '+44 102 41264-5555',
          address: 'Rua dos Alfeneiros',
          address_number: '04',
          complement: 'Em frente a casa da Arabella Figg',
          neighborhood: 'London Ville',
          city: 'London',
          state: 'England',
          zipCode: '999999999',
        };

        localStorage.setItem('@Poupachef:token', postmanToken);
        localStorage.setItem('@Poupachef:user', JSON.stringify(user));

        setData({ token: postmanToken, user });
        return 'AUTHENTICATED';
      } else {
        console.log('refused');
        return 'REFUSED';
      }
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Poupachef:token');
    localStorage.removeItem('@Poupachef:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
