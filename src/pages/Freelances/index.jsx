import styled from 'styled-components';
import Card from '../../components/Card';
import { Loader } from "../../utils/style/Atoms";
import colors from '../../utils/style/colors';
import { useFetch } from '../../utils/hooks';

// Styled component
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

function Freelances() {
    const { data, isLoading, error } = useFetch('http://localhost:8000/freelances');
    const { freelancersList } = data;

    if (error) return <p>Oups ... Un problème a eu lieu.</p>

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isLoading ?
                <Loader /> :
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
            }
        </div>
    )
}

export default Freelances;