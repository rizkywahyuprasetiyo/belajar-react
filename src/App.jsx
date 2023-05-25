import { useEffect, useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import axios from 'axios';

export default function App(props) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            try {
                const { data } = await axios('https://jsonplaceholder.typicode.com/users');
                setUser(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        getUsers().then((r) => r);
    }, []);

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Data Users : {user.length}</Card.Title>
                <Card.Body>
                    {loading ? (
                        <div>Loading...</div>
                    ) : user.length ? (
                        <ol>
                            {user.map((user) => (
                                <li key={user.id}>
                                    {user.name} ({user.username})
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div>Belum ada data user...</div>
                    )}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}
