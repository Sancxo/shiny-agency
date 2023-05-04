import styled from "styled-components"
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";

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
  const { toggleTheme, theme } = useTheme();

  return (
    <FooterContainer>
      <NightModeBtn onClick={_ => toggleTheme()}>Changer de mode: {theme === 'light' ? '☀️' : '🌙'}</NightModeBtn>
    </FooterContainer>
  )
}