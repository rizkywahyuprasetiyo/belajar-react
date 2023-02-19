import { useEffect, useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import axios from 'axios';

export default function App(props) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getPostData() {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users');
            console.log(data);
        }

        getPostData();
    }, []);

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Data Users</Card.Title>
                <Card.Body>Hai</Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}
