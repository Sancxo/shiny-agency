import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DarkLogo from '../../assets/dark-logo.png';
import LightLogo from '../../assets/light-logo.png';
import { StyledLink } from '../../utils/style/Atoms';
import { useTheme } from '../../utils/hooks';

// Styled component
const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
padding: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`

function Header() {
    const { theme } = useTheme();

    return (
        <NavContainer>
            <Link to="/"><HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} /></Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
                <StyledLink to='/freelances'>Freelances</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header;