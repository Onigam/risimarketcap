import Header from './Header';
import Head from 'next/head';

const withLayout = Page => {
    return () => (
        <div>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous">
                </link>
            </Head>
            <Header />
            <div className="container">
                <Page />
            </div>
        </div>
    );
};

export default withLayout;
