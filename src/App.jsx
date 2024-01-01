import { useRef, useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import useJoke from './hooks/useJoke';
import Input from './components/Input';
import Button from './components/Button';

export default function App(props) {
    const nameRef = useRef('');
    const [name, setName] = useState('Fulan');
    const joke = useJoke(name);
    const generateJoke = (e) => {
        e.preventDefault();
        setName(nameRef.current.value);
    };
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Joks</Card.Title>
                <Card.Body>
                    <p className='mb-3'>{joke.value}</p>
                    <Input ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generateJoke}>Generate a joke</Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
