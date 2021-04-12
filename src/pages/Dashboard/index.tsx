import React, { useEffect } from 'react';
import { useSupplier } from '../../contexts/suppliers';
import { useAuth } from '../../contexts/auth';
import { withRouter } from 'react-router-dom';

import * as S from './styles';
import Table from '../../components/Table';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  const { suppliers, getSuppliers } = useSupplier();

  const token = localStorage.getItem('@Poupachef:token');

  useEffect(() => {
    if (token) {
      getSuppliers(token);
    }
  }, [getSuppliers, token, suppliers]);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Suppliers</S.Title>
        {suppliers && <Table suppliers={suppliers} />}
      </S.Container>
    </>
  );
};

export default withRouter(Dashboard);
