import Button from './Button';
import { useState } from 'react';

export default function Counter({ initValue }) {
    const [count, setCount] = useState(initValue);

    function hitung() {
        setCount((prevState) => prevState + 1);
    }

    return (
        <>
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
        </>
    );
}
