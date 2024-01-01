import { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
    <input
        ref={ref}
        className={'transition duration-300 w-full focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'}
        {...props}
        type={type}
    />
));

export default Input;
