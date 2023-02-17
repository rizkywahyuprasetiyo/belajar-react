import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandChrome,
} from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';

export default function () {
    const type = 'submit';
    const onClick = () => console.log('on click dengan cara lain');
    return (
        <div className={'bg-gray-200 grid place-content-center min-h-screen'}>
            <div className={'flex gap-x-2'}>
                <Button {...{ type, onClick }}>
                    <IconBrandChrome />
                    More
                </Button>
                <Button onClick={() => console.log('facebook')} type={'submit'}>
                    <IconBrandFacebook />
                    Facebook
                </Button>
                <Button
                    className={'bg-sky-500'}
                    onClick={() => console.log('twitter')}
                    type={'reset'}
                >
                    <IconBrandTwitter />
                    Twitter
                </Button>
                <Button
                    className={'bg-gray-900'}
                    onClick={() => console.log('twitter')}
                    type={'reset'}
                >
                    <IconBrandGithub />
                    Github
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
