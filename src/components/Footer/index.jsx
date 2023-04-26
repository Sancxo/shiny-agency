import styled from "styled-components"
import colors from "../../utils/style/colors";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;
const NightModeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary}
`;

export default function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <FooterContainer>
      <NightModeBtn onClick={_ => toggleTheme()}>Changer de mode: {theme === 'light' ? '☀️' : '🌙'}</NightModeBtn>
    </FooterContainer>
  )
}