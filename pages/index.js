import withLayout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Router, { useRouter } from 'next/router';

const risiMood = ({ percent_change_24h: price_change }) => {

    let result = '';

    if (price_change > 15) {
        result = 'https://image.noelshack.com/fichiers/2019/02/2/1546914264-1484472223-risitas739.png';
    } else if (price_change > 10) {
        result = 'https://image.noelshack.com/fichiers/2016/24/1466366197-risitas10.png';
    } else if (price_change > 5) {
        result = 'https://image.noelshack.com/fichiers/2017/39/3/1506463228-risibg.png';
    } else if (price_change > 0) {
        result = 'https://image.noelshack.com/fichiers/2018/29/6/1532128784-risitas33.png';
    } else if (price_change > -5) {
        result = 'https://image.noelshack.com/fichiers/2016/47/1480107253-ris47.png';
    } else if (price_change > -10) {
        result = 'https://image.noelshack.com/fichiers/2016/38/1474490235-risitas434.png';
    } else if (price_change > -15) {
        result = 'https://image.noelshack.com/fichiers/2017/31/5/1501863678-risitas596bestreup.png';
    } else if (price_change > -30) {
        result = 'https://image.noelshack.com/fichiers/2017/30/4/1501186458-risitalarmebestreup.gif';
    } else if (price_change > -100) {
        result = 'https://image.noelshack.com/fichiers/2018/34/2/1534813390-bogdanoff5.png';
    }
    return result;
};

const renderCurrencyRow = (currency) => {
    const { quote: { USD: currencyQuote }} = currency;
    const formatCurrency = (value) => (
        new Intl.NumberFormat('en-EN', { maximumFractionDigits: 4, style: 'currency', currency: 'USD' }).format(value)
    );
    return (<tr>
        <th scope="row">{currency.cmc_rank}</th>
        <td>
            <div className="d-flex align-items-center">
                <img className="mr-3" width={16} height={16} src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${currency.id}.png`} />
                {/*<Link href="/currencies/[name]" as={`/currencies/${currency.symbol}`}>*/}
                {/*    <a>{currency.name}</a>*/}
                {/*</Link>*/}
                <a href={`/currencies/${currency.slug}`}>{currency.name}</a>
            </div>
        </td>
        <td>{formatCurrency(currencyQuote.price)}</td>
        <td className={currencyQuote.percent_change_24h >= 0 ? 'text-success' : 'text-danger'}>
           <div className="d-flex justify-content-between w-100">
            {parseFloat(currencyQuote.percent_change_24h).toFixed(2)}&nbsp;%
            <img className="mr-4" width={42} src={risiMood(currencyQuote)} />
           </div>
        </td>
        <td>{formatCurrency(currencyQuote.market_cap)}</td>
        <td>{formatCurrency(currencyQuote.volume_24h)}</td>
        <td>{currency.circulating_supply}</td>
    </tr>);
};

export const Index = ({ currencies }) => {

    const router = useRouter();
    const page = router.query.page ? router.query.page : 1;

    const renderPaginatedButton = () => {
        return (
            <div className=" d-flex justify-content-end btn-group" role="group" aria-label="Pagination buttons">
                { page > 1 && <button type="button" className="btn btn-small" onClick={() => Router.push(`/${parseInt(page)-1}`)}>← Previous 100</button>}
                <button type="button" className="btn btn-small" onClick={() => Router.push(`/${parseInt(page)+1}`)}>Next 100 →</button>
            </div>
        );
    };

    return (<>
        <div className="row">
            <div className="col p-4 d-flex align-items-center">
                <img className="mr-4" width={100} src={"http://image.noelshack.com/fichiers/2017/52/3/1514370207-risitas-bitcoin.png"} />
                <div>
                    <h3>Risimarketcap</h3>
                    <h5>Cryptocurrencies top ranking by Market Capitalization</h5>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                {renderPaginatedButton()}
            </div>
        </div>
        <div className="row">
            <div className="col">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price USD</th>
                        <th scope="col">Price change (24h)</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Volume (24h)</th>
                        <th scope="col">Available supply</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currencies.data && currencies.data.map(renderCurrencyRow)}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};
export const fetcher = async function({ query }) {
    const page = query.page ? query.page : 1;
    const limit = 100;
    const start = 1 + ((page-1)*limit);
    const res = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}&convert=USD`,
        { headers: {'X-CMC_PRO_API_KEY': '2f418ece-b829-41f7-b888-d79ac329f403'}}
    );

    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.data.length}`);

    return {
        currencies: data
    };
};


export default withLayout(Index, fetcher);
