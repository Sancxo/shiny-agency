import styled from 'styled-components';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { Loader } from "../../utils/style/Atoms";


// Styled component
const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
    const [freelanceProfiles, setFreelanceProfiles] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchFreelances() {
            setDataLoading(true);
            try {
                const resp = await fetch('http://localhost:8000/freelances');
                const { freelancersList } = await resp.json();
                setFreelanceProfiles(freelancersList);
            } catch (error) { setError(error); }
            finally { setDataLoading(false); }
        }
        fetchFreelances();
    }, []);

    if (error) return <p>Oups ... Un problème a eu lieu.</p>

    return (
        <div>
            <h1>Freelances</h1>
            {isDataLoading ?
                <Loader /> :
                <CardsContainer>
                    {freelanceProfiles.map((profile, index) => (
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