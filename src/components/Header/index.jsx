import {Link} from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

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

function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            <StyledLink to='/freelances'>Freelances</StyledLink>
        </nav>
    )
}

export default Header;