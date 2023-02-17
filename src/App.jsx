import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import React from 'react';

export default function () {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className={'flex gap-x-2'}>
                <Button onClick={() => console.log('facebook')} type={'submit'}>
                    <IconBrandFacebook />
                    Facebook
                </Button>
                <Button onClick={() => console.log('twitter')} type={'reset'}>
                    <IconBrandTwitter />
                    Twitter
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { children, text } = props;
    return (
        <button
            {...props}
            className={
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded'
            }
        >
            {text || children}
        </button>
    );
}
