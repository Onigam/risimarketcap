import Head from 'next/head';
import Header from './Header';

const withLayout = (Page, fetcher) => {
    const pageComponent = (props) => (
        <div>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous">
                </link>
                <link rel="icon" type="image/png" href="/static/favicon.png" />
                <title>Risimarketcap: {props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <div className="container">
                <Header />
                <Page {...props} />
            </div>
        </div>
    );

    pageComponent.getInitialProps = fetcher;

    return pageComponent;
};



export default withLayout;
