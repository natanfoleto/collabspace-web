import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthentication } from "../../contexts/Authentication";

import {
  Container,
  Form,
  Group,
  Label,
  Input,
  Button,
  LinkRegister,
} from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthentication();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { result } = await signIn({ email, password });

    if (result === "success") alert("Logado com sucesso!");
    if (result === "error") alert("Falha ao fazer login!");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Entrar</h1>

        <Group>
          <Label htmlFor="email">Endereço de e-mail</Label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Digite seu e-mail"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Group>

        <Group>
          <Label htmlFor="password">Sua senha secreta</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Group>

        <Button>Fazer login</Button>

        <LinkRegister>
          <p>Novo no Collabspace?</p>
          <a onClick={handleRegister}>Cadastre-se agora</a>
        </LinkRegister>
      </Form>
    </Container>
  );
};

export default Login;
