import withLayout from '../components/Layout';
import Link from 'next/link';
import mockData from '../data/currencies';

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
                <img className="mr-3" width={16} height={16} src={`https://images.openmarketcap.com/coin_logos/16x16/${currency.global_id}.png`} />
                <Link href="/currencies/[name]" as={`/currencies/${currency.symbol}`}>
                    {currency.name}
                </Link>
            </div>
        </td>
        <td>{parseFloat(currency.price_usd).toFixed(3)}</td>
        <td>{parseInt(currency.market_cap)}</td>
        <td>{parseInt(currency.volume_usd)}</td>
        <td>{currency.available_supply}</td>
        <td className={currency.price_change >= 0 ? 'text-success' : 'text-danger'}>
            {parseFloat(currency.price_change).toFixed(2)}&nbsp;%
        </td>
        <td>
            <img width={56} src={risiMood(currency)} />
        </td>
    </tr>);
};

const Page = () => {
    const currencies = mockData.data;

    return (<>
        <div className="row">
            <div className="col p-4">
                <h3>Cryptocurrencies by Market Capitalization</h3>
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
                        <th scope="col">Price change</th>
                        <th scope="col">Risi mood</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currencies.map(renderCurrencyRow)}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default withLayout(Page);
