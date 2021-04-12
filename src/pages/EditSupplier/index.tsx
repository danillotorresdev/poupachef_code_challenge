import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../contexts/auth';
import { useSupplier } from '../../contexts/suppliers';
import { useToast } from '../../contexts/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';
import Header from '../../components/Header';

type DataToSubmit = {
  supplierName: string;
  supplierCNPJ: string;
  SupplierPhoneNumber: string;
  OwnerName: string;
  OwnerEmail: string;
  OwnerPhoneNumber: string;
  AddressName: string;
  AddressNumber: string;
  AddressComplement: string;
  AddressNeighborhood: string;
  AddressCity: string;
  AddressState: string;
  AddressZipCode: string;
};

const EditSupplier: React.FC = () => {
  const { id: paramId } = useParams<{ id: string }>();
  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();
  const { suppliers, editSuppliers } = useSupplier();
  const { addToast } = useToast();
  const history = useHistory();

  const currentSupplier = suppliers.find(
    (suplier) => suplier.publicId === paramId,
  );

  const handleSubmit = useCallback(
    async (data: DataToSubmit) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          supplierName: Yup.string().required('Supplier name is required'),
          supplierCNPJ: Yup.string().required('Supplier CNPJ is required'),
          SupplierPhoneNumber: Yup.string().required(
            'Supplier Phone Number is required',
          ),

          OwnerName: Yup.string().required('Supplier CNPJ is required'),
          OwnerEmail: Yup.string()
            .required('Owner Email is required')
            .email('Insert a valid e-mail'),
          OwnerPhoneNumber: Yup.string().required(
            'Owner PhoneNumber is required',
          ),
          AddressName: Yup.string().required('Address name  is required'),
          AddressNumber: Yup.string().required('Address number is required'),
          AddressComplement: Yup.string().required(
            'Address complement is required',
          ),
          AddressNeighborhood: Yup.string().required(
            'Address neighborhood is required',
          ),
          AddressCity: Yup.string().required('Address City is required'),

          AddressState: Yup.string().required('Address State is required'),
          AddressZipCode: Yup.string().required('Address ZipCode is required'),
        });

        await schema.validate(data, { abortEarly: false });

        editSuppliers({
          publicId: currentSupplier ? currentSupplier.publicId : '123456',
          name: data.supplierName,
          cnpj: data.supplierCNPJ,
          phoneNumber: data.SupplierPhoneNumber,
          zipCode: data.AddressZipCode,
          address: data.AddressName,
          number: data.AddressNumber,
          complement: data.AddressComplement,
          neighborhood: data.AddressNeighborhood,
          city: data.AddressCity,
          state: data.AddressCity,
          ownerName: data.OwnerName,
          ownerEmail: data.OwnerEmail,
          ownerPhoneNumber: data.OwnerPhoneNumber,
        });
        history.push('/Dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err, 'err YUP');
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [addToast, currentSupplier, editSuppliers, history],
  );

  return (
    <>
      <Header />
      <S.Container>
        <S.FormContent>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <S.InputCollectionWrapper>
              <S.Title>Supplier Details</S.Title>
              <S.InputGroupWrapper>
                <Input
                  name="supplierName"
                  placeholder="Name"
                  defaultValue={currentSupplier?.name}
                />
                <Input
                  name="supplierCNPJ"
                  placeholder="CNPJ"
                  defaultValue={currentSupplier?.cnpj}
                />
              </S.InputGroupWrapper>
              <Input
                name="SupplierPhoneNumber"
                placeholder="Phone Number"
                defaultValue={currentSupplier?.phoneNumber}
              />
            </S.InputCollectionWrapper>

            <S.InputCollectionWrapper>
              <S.Title>Owner</S.Title>
              <S.InputGroupWrapper>
                <Input
                  name="OwnerName"
                  placeholder="Name"
                  defaultValue={currentSupplier?.ownerName}
                />
                <Input
                  name="OwnerEmail"
                  placeholder="Email"
                  defaultValue="owner@email.com"
                  disabled
                />
              </S.InputGroupWrapper>
              <Input
                name="OwnerPhoneNumber"
                placeholder="Phone Number"
                defaultValue="+55 11 99999999"
                disabled
              />
            </S.InputCollectionWrapper>

            <S.InputCollectionWrapper>
              <S.Title>Address</S.Title>
              <S.InputGroupWrapper>
                <Input
                  name="AddressName"
                  placeholder="Address"
                  defaultValue={user.address}
                  disabled
                />
                <Input
                  name="AddressNumber"
                  placeholder="Number"
                  defaultValue={user.address_number}
                  disabled
                />
              </S.InputGroupWrapper>
              <Input
                name="AddressComplement"
                placeholder="Complement"
                defaultValue={user.complement}
                disabled
              />
              <S.InputGroupWrapper>
                <Input
                  name="AddressNeighborhood"
                  placeholder="Neighborhood"
                  defaultValue={user.neighborhood}
                />
                <Input
                  name="AddressCity"
                  placeholder="City"
                  defaultValue={user.city}
                  disabled
                />
              </S.InputGroupWrapper>
              <S.InputGroupWrapper>
                <Input
                  name="AddressState"
                  placeholder="State"
                  defaultValue={user.state}
                  disabled
                />
                <Input
                  name="AddressZipCode"
                  placeholder="ZipCode"
                  defaultValue={user.zipCode}
                  disabled
                />
              </S.InputGroupWrapper>
            </S.InputCollectionWrapper>

            <Button type="submit">Submit</Button>
          </Form>
        </S.FormContent>
      </S.Container>
    </>
  );
};

export default EditSupplier;
