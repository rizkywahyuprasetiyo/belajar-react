import Card from './components/Card';
import Button from './components/Button';

export default function App() {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight grid place-content-center min-h-screen'>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Kenapa Reactjs?</Card.Title>
                    <Card.Body>
                        React sangat populer: React adalah salah satu framework JavaScript yang paling populer dan banyak digunakan di industri saat
                        ini. Banyak perusahaan besar seperti Facebook, Instagram, dan Netflix menggunakan React untuk mengembangkan aplikasi web
                        mereka. Dengan mempelajari React, Anda memperoleh keterampilan yang sangat dihargai di pasar kerja.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Lihat</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}
