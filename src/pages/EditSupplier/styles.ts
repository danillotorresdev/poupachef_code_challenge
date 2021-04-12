import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const Title = styled.h2`
  color: #fff;
`;

export const FormContent = styled.div`
  max-width: 800px;
  flex: 1;
`;

export const InputCollectionWrapper = styled.div`
  padding: 20px 0;
  &::after {
    content: '';
    display: block;
    border-bottom: 1px solid #9ffff7;
    padding: 20px 40px;
    margin: 0 auto;
  }
`;

export const InputGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  div {
    margin: 0;
  }
  & div:first-of-type {
    margin-right: 10px;
  }
`;
