import { useState } from "react";

import { Container, Form, Group, Label, Input, Button } from "./styles";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Container>
      <Form>
        <h1>Cadastre-se</h1>

        <Group>
          <Label htmlFor="name">Nome</Label>

          <Input
            type="text"
            id="name"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Group>

        <Group>
          <Label htmlFor="birthdate">Data de nascimento</Label>

          <Input
            type="date"
            id="birthdate"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          />
        </Group>

        <Group>
          <Label htmlFor="email">Endereço de e-mail</Label>

          <Input
            type="text"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Input
            type="text"
            id="confirmarEmail"
            placeholder="Confirmar e-mail"
            value={confirmEmail}
            onChange={(e) => {
              setConfirmEmail(e.target.value);
            }}
          />
        </Group>

        <Group>
          <Label htmlFor="password">Sua senha secreta</Label>

          <Input
            type="password"
            id="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Group>

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
