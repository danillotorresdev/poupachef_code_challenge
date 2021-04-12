import styled from 'styled-components';

import Tooltip from '../Tooltip';

type ContainerProps = {
  isFocused: boolean;
  isFielld: boolean;
  isErrored: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: #60b5ae;
  border-radius: 10px;
  /* border: 2px solid #233129; */
  padding-left: 16px;
  height: 50px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    height: 100%;
    &:focus {
      outline: none;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #233129 inset;
      -webkit-text-fill-color: #fff !important;
    }

    &::placeholder {
      color: #fff;
    }
  }
  svg {
    margin-right: 16px;
    background: transparent;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  /* margin-left: 16px; */
  background: transparent;
  padding-right: 10px;
  svg {
    margin: 0;
    background: transparent;
  }
  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      left: 48%;
      border-color: #c53030 transparent;
    }
  }
`;
