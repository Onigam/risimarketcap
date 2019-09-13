import withLayout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Currency = ({ currency }) => {
    return (
        <>
            <div className="row my-4">
                <div className="col d-flex align-items-center">
                    <h1>{currency.name}</h1>
                    <span className="ml-3">({currency.symbol})</span>
                    <img className="ml-3" width={48} height={48} src={currency.logo} />
                </div>
                <div className="col-12">
                    <a href={currency.urls.website}>{currency.urls.website}</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{currency.description}</p>
                </div>
            </div>
            <div className="row my-4">
                <div className="col d-flex flex-column">
                    <h2>Explorer</h2>
                    {currency.urls.explorer.map(exp => (<a href={exp}>{exp}</a>))}
                </div>
            </div>
        </>
    );
};

export const fetcher = async function({ query }) {

    console.log(`----> ${query.slug}`);
    const res = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?slug=${query.slug}`,
        { headers: {'X-CMC_PRO_API_KEY': '2f418ece-b829-41f7-b888-d79ac329f403'}}
    );

    const { data }  = await res.json();
    const key = Object.keys(data)[0];
    console.log(`Show data fetched for ${JSON.stringify(data[key])}`);

    return {
        currency: data[key],
        title: data[key].name,
        description: data[key].description
    };
};

export default withLayout(Currency, fetcher);
