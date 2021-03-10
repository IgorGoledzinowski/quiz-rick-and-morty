import { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { Link } from '@reach/router';

const Episodes = ({episodeId}) => {
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
        .then(response => response.json())
        .then(setEpisode)
    }, [episodeId])

    if (!episode) return <div>Loading...</div>

    return (
        <Layout>
            <Link to="/">Back</Link>
            <h1>Episode {episodeId}</h1>
            {episode.name}
        </Layout>
    )
}

export default Episodes