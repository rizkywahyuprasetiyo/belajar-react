import { useEffect, useRef } from 'react';

const Input = ({ isFocused = false, type = 'text', ...props }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            ref={inputRef}
            className={'transition duration-300 w-full focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'}
            {...props}
            type={type}
        />
    );
};

export default Input;
