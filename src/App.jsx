import { IconBrandGithub } from '@tabler/icons-react';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import Label from './components/Label';
import PlaceContentCenter from './components/PlaceContentCenter';

export default function App() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function submit(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <div>
            <PlaceContentCenter>
                <Card>
                    <Card.Title>Sign up for new account!</Card.Title>
                    <form onSubmit={submit}>
                        <Card.Body>
                            <div className={'mb-5 border rounded-lg p-4'}>
                                <p>Name: {form.name || '-----'}</p>
                                <p>Email: {form.email || '-----'}</p>
                            </div>
                            <div className='mb-5'>
                                <Label htmlFor='name' value='Name' />
                                <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
                            </div>
                            <div className='mb-5'>
                                <Label htmlFor='email'>Email</Label>
                                <Input value={form.email} onChange={onChange} id={'email'} name={'email'} type={'email'} />
                            </div>
                            <div>
                                <Label htmlFor='password'>Password</Label>
                                <Input value={form.password} onChange={onChange} id={'password'} name={'password'} type={'password'} />
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Button>
                                <IconBrandGithub />
                                Register
                            </Button>
                        </Card.Footer>
                    </form>
                </Card>
            </PlaceContentCenter>
        </div>
    );
}
