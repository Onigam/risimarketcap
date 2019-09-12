import { useRouter } from 'next/router';
import withLayout from '../../components/Layout';

const Currency = () => {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.name}</h1>
            <p>The {router.query.name} page</p>
        </div>
    );
}

export default withLayout(Currency);
