import React, { useEffect, useState } from 'react';
import { useSupplier } from '../../contexts/suppliers';

import * as S from './styles';
import Table from '../../components/Table';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  const { suppliers, getSuppliers } = useSupplier();

  useEffect(() => {
    if (suppliers.length === 0) {
      getSuppliers();
    }
  }, [getSuppliers, suppliers]);

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

export default Dashboard;
