import styled from 'styled-components';
import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';

// Styled component
const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture
        }
    ];

    return (
        <div>
            <h1>Freelances</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card 
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances;