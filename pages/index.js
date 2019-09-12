import withLayout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const risiMood = ({ price_change }) => {

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
    return (<tr>
        <th scope="row">{currency.rank}</th>
        <td>
            <div className="d-flex align-items-center">
                <img className="mr-3" width={16} height={16} src={`https://images.openmarketcap.com/coin_logos/16x16/${currency.name.toLowerCase()}.png`} />
                {/*<Link href="/currencies/[name]" as={`/currencies/${currency.symbol}`}>*/}
                {/*    <a>{currency.name}</a>*/}
                {/*</Link>*/}
                <a href="/">{currency.name}</a>
            </div>
        </td>
        <td>${parseFloat(currency.price_usd).toFixed(3)}</td>
        <td>${parseInt(currency.market_cap)}</td>
        <td>${parseInt(currency.volume_usd)}</td>
        <td>{currency.available_supply}</td>
        <td className={currency.price_change >= 0 ? 'text-success' : 'text-danger'}>
            {parseFloat(currency.price_change).toFixed(2)}&nbsp;%
        </td>
        <td>
            <img width={56} src={risiMood(currency)} />
        </td>
    </tr>);
};

const Index = ({ currencies }) => {
    return (<>
        <div className="row">
            <div className="col p-4 d-flex align-items-center">
                <img className="mr-4" width={100} src={"http://image.noelshack.com/fichiers/2017/52/3/1514370207-risitas-bitcoin.png"} />
                <div>
                    <h3>Risicoins</h3>
                    <h5>Top 100 Cryptocurrencies by Market Capitalization without fake volume</h5>
                </div>
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
                        <th scope="col">Market Cap</th>
                        <th scope="col">Volume (24h)</th>
                        <th scope="col">Available supply</th>
                        <th scope="col">Price change (24h)</th>
                        <th scope="col">Risi mood</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currencies && currencies.data && currencies.data.map(renderCurrencyRow)}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};
const fetcher = async function() {
    const res = await fetch('http://api.openmarketcap.com/api/v1/tokens');

    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.data.length}`);

    return {
        currencies: data
    };
};


export default withLayout(Index, fetcher);
