import PlaceContentCenter from './components/PlaceContentCenter';
import Input from './components/Input';
import { useState, useEffect } from 'react';
import Button from './components/Button';

export default function App() {
    const [name, setName] = useState('');
    const [online, setOnline] = useState(false);
    const [scrollPosition, setScroolPosition] = useState(window.scroll);

    useEffect(() => {
        console.log('saya selalu di render.');
    });

    useEffect(() => {
        console.log('saya hanya di panggil pada saat render pertama kali.');
    }, []);

    useEffect(() => {
        console.log(`Sekarang saya sedang ${online ? 'online' : 'offline'}`);
    }, [online]);

    function updateScrollPosition() {
        const windowScrolling = window.scrollY;
        console.log(`Window scroll position: ${windowScrolling}`);
        setScroolPosition(windowScrolling);
    }

    function onKeyDown(e) {
        console.log(e.code);
    }

    useEffect(() => {
        // window.addEventListener('scroll', updateScrollPosition);
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    });

    return (
        <PlaceContentCenter>
            <div className='h-[4000px]'>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
                <Button onClick={() => setOnline(true)}>Set Online</Button>
            </div>
        </PlaceContentCenter>
    );
}
