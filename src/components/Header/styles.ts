import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  padding: 25px;
  background: ${shade(0.15, '#6cccc4')};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 50px;
  }

  button {
    margin-left: 15px;
    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
