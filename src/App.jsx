import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';
import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    function hitung() {
        setCount((prevState) => prevState + 1);
    }

    return (
        <div>
            <PlaceContentCenter>
                <div className='text-5xl font-bold'>{count}</div>
                <div className='mt-4 flex items-center gap-x-2'>
                    <Button className='bg-violet-600' onClick={hitung}>
                        +1
                    </Button>
                    <Button
                        className='bg-violet-600'
                        onClick={() => {
                            hitung();
                            hitung();
                            hitung();
                        }}>
                        +3
                    </Button>
                </div>
            </PlaceContentCenter>
        </div>
    );
}
