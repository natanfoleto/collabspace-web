import { useNavigate } from "react-router-dom";

import { SignOut, House } from "phosphor-react";

import { useAuthentication } from "../../contexts/Authentication";

import { LogoRocket } from "../../assets/sources";

import AvatarCircle from "../AvatarCircle";

import {
  Container,
  Brand,
  Navbar,
  Menu,
  Item,
  Aside,
  AsideButton,
  Divider,
} from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { user, me, signOut } = useAuthentication();

  const handleLogo = () => {
    navigate("/feed");
  };

  return (
    <Container>
      <Brand>
        <LogoRocket onClick={handleLogo} />
      </Brand>

      <Navbar>
        <Menu>
          <Item>
            <House size={28} weight="fill" />
          </Item>
        </Menu>

        <Aside>
          <AsideButton title="Sair" onClick={signOut}>
            <SignOut size={18} weight="fill" />
          </AsideButton>

          <Divider />

          <AvatarCircle
            size="40px"
            avatar={user?.avatarUrl}
            onClick={() => me(user?.id)}
          />
        </Aside>
      </Navbar>
    </Container>
  );
};

export default Header;
