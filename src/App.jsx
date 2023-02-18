import PlaceContentCenter from './components/PlaceContentCenter';
import Counter from './components/Counter';

export default function App() {
    return (
        <div>
            <PlaceContentCenter>
                <Counter initValue={10} />
            </PlaceContentCenter>
        </div>
    );
}
