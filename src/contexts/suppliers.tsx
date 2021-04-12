import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

export type Supplier = {
  publicId: string;
  name: string;
  cnpj: string;
  phoneNumber: string;
  ownerName: string;
  zipCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  ownerEmail: string;
  ownerPhoneNumber: string;
};

type SuppliersContextData = {
  getSuppliers(): void;
  suppliers: Supplier[];
  editSuppliers({
    publicId,
    name,
    cnpj,
    phoneNumber,
    zipCode,
    address,
    number,
    complement,
    neighborhood,
    city,
    state,
    ownerName,
    ownerEmail,
    ownerPhoneNumber,
  }: Supplier): void;
};

const SuppliersContext = createContext<SuppliersContextData>(
  {} as SuppliersContextData,
);

const SupplierProvider: React.FC = ({ children }) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const token = localStorage.getItem('@Poupachef:token');

  const getSuppliers = useCallback(async () => {
    try {
      let res;
      if (token) {
        res = await api.get('/suppliers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      if (res) {
        setSuppliers(res.data);
      }
    } catch (err) {
      if (err.response?.data.error === 'invalid_token') {
        localStorage.removeItem('@Poupachef:token');
        localStorage.removeItem('@Poupachef:user');
      }
    }
  }, [token]);

  const editSuppliers = useCallback(
    async ({
      publicId,
      name,
      cnpj,
      phoneNumber,
      zipCode,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      ownerName,
      ownerEmail,
      ownerPhoneNumber,
    }: Supplier) => {
      try {
        let res;
        if (token) {
          res = await api.put(
            '/suppliers',
            {
              publicId,
              name,
              cnpj,
              phoneNumber,
              zipCode,
              address,
              number,
              complement,
              neighborhood,
              city,
              state,
              ownerName,
              ownerEmail,
              ownerPhoneNumber,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
        }
        if (res) {
          setSuppliers(res.data);
        }
      } catch (err) {
        if (err.response?.data.error === 'invalid_token') {
          localStorage.removeItem('@Poupachef:token');
          localStorage.removeItem('@Poupachef:user');
        }
      }
    },
    [token],
  );

  return (
    <SuppliersContext.Provider
      value={{
        getSuppliers,
        suppliers,
        editSuppliers,
      }}
    >
      {children}
    </SuppliersContext.Provider>
  );
};

function useSupplier(): SuppliersContextData {
  const context = useContext(SuppliersContext);

  return context;
}

export { SupplierProvider, useSupplier };
