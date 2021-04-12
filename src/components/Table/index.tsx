import React from 'react';
import * as S from './styles';
import { Supplier } from '../../contexts/suppliers';
import { Link } from 'react-router-dom';

type TableMarkupProps = {
  suppliers: Supplier[];
};

const TableMarkup: React.FC<TableMarkupProps> = ({
  suppliers,
}: TableMarkupProps) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>CNPJ</th>
          <th>Phone Number</th>
          <th>Owner</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.length > 0 &&
          suppliers.map((item: Supplier) => (
            <tr key={item.publicId}>
              <>
                <td> {item.name}</td>
                <td> {item.cnpj}</td>
                <td> {item.phoneNumber}</td>
                <td> {item.ownerName}</td>
              </>
              <td>
                <Link to={`/EditSupplier/${item.publicId}`}>Edit</Link>
              </td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
};

export default TableMarkup;
