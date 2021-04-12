import styled from 'styled-components';
import { lighten, shade } from 'polished';

export const Table = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  border-radius: 5px;
  overflow: hidden;

  th {
    padding: 20px 10px;
  }

  td,
  th {
    border: none;
  }

  td {
    padding: 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background: ${lighten(0.3, '#e5502c')};
    }
  }
  thead > tr {
    background-color: #e5502c;
    color: #fff;
  }

  a {
    color: #fff;
    background-color: ${shade(0.1, '#6cccc4')};
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
  }
`;
