import { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import Layout from 'components/Layout';
import Card from 'components/Card'
import CardGrid from 'components/CardGrid'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode?pages=1')
        .then(response => response.json())
        .then(data => {
            setEpisodes(data.results)    
        })
    }, [])

    return (
        <Layout>
            <h1>Episodes</h1>
            <CardGrid>
                {episodes.map(el => (
                    <Link to={`/episode/${el.id}`} key={el.id}>
                    <Card
                        name={el.name}
                        title={el.air_date}
                        image="//static01.nyt.com/images/2013/12/02/arts/11rickandmorty-item/MOTY-superJumbo.jpg?quality=90&auto=webp"
                        tag="Season 1"
                    />
                    </Link>
                ))}
            </CardGrid>
        </Layout>
    )
}

export default Episodes