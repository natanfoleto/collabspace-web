import { useNavigate } from "react-router-dom";

import { SignOut } from "phosphor-react";

import { useAuthentication } from "../../contexts/Authentication";

import { LogoRocket } from "../../assets/sources";

import { Container, Navbar, Aside, AsideButton } from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { signOut } = useAuthentication();

  const handleLogo = () => {
    navigate("/feed");
  };

  return (
    <Container>
      <LogoRocket onClick={handleLogo} />

      <Navbar>NAVBAR</Navbar>

      <Aside>
        <AsideButton title="Sair" onClick={signOut}>
          <SignOut size={22} weight="fill" />
        </AsideButton>
      </Aside>
    </Container>
  );
};

export default Header;
