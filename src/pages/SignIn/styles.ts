import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;
  }
  h1 {
    margin-bottom: 24px;
    font-size: 24px;
    color: #fff;
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;
    &:hover {
      color: ${shade(0.03, '#f4ede8')};
    }
  }
  > a {
    color: #fff;
    font-weight: bold;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.05, '#fff')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url('https://uploads-ssl.webflow.com/5e0517740aa529fa437bc1a2/5fbfac869d2e7a407a2289e9_App-p-1080.png')
    no-repeat center;
  background-size: contain;
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
`;
