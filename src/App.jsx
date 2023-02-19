import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import { useRef, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

export default function App() {
    const handleClick = () => {
        console.log('hit me');
    };

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>useRef Hooks</Card.Title>
                <Card.Body>
                    <div className='mb-4'>
                        <Input placeholder='Isikan email' type='email' isFocused />
                    </div>
                    <div className='mb-4'>
                        <Input placeholder='Isikan dengan Password' type='password' />
                    </div>
                    <Button onClick={handleClick}>Tick</Button>
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}
