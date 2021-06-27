import Navbar from '../components/Navbar'
import Head from 'next/Head';

const Layout = (props) => (
    <div>
        <Head>
            <title>ComeUp</title>
            <link rel="stylesheet" 
            href="https://bootswatch.com/4/darkly/bootstrap.min.css"></link>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;