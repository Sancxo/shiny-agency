import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DarkLogo from '../../assets/dark-logo.png'

// Styled component
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink && `
            color: white;
            border-radius: 30px;
            background: ${colors.primary};
        `}
`
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
    return (
        <NavContainer>
            <Link to="/"><HomeLogo src={DarkLogo} /></Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
                <StyledLink to='/freelances'>Freelances</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header;