import React, { useRef, useCallback } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../contexts/auth';
import { useToast } from '../../contexts/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  Logo,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
  postmanToken: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
          postmanToken: Yup.string().required(
            'Digite um token válido criado no postman',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        const auth = signIn({
          email: data.email,
          password: data.password,
          postmanToken: data.postmanToken,
        });

        if (auth === 'REFUSED') {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description:
              'Ocorreu um erro ao fazer login, cheque as credenciais',
          });
        } else {
          history.push('/dashboard');
        }
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
    [signIn, history, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Logo
            src={'https://poupachef.com/static/media/logo.p_white.b7170838.png'}
            alt="Poupachef"
          />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Input
              icon={FiLock}
              name="postmanToken"
              type="password"
              placeholder="Postman token"
            />

            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
