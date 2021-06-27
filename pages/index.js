import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Quote from '../components/Quote';

const Index = () => (
    <Layout>
        <div>
            <h1>Join the ComeUp</h1>
            <br/>
            <h3>Add Your Favorite Stocks and Earn</h3>
        </div>
        <Stocks/>
        <StockForm/>
    </Layout>
);

class StockForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handlechange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (event.target.value.length != 4) {
            
        }
        addStock(event.target.value.toUpper())
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Symbol:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class Stocks extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            empty: true,
        }

        this.addStock = this.addStock.bind(this);
        this.getStocks = this.getStocks.bind(this);
    }

    componentDidMount() {
        
    }
    async addStock(stock) {
        const link = '' + 'https://finnhub.io/api/v1/quote?symbol=' + stock + '&token=bs34tbfrh5rcraslb7sg';
        const res = await fetch(link);
        const data = await res.json();
        this.setState({
            stocks: stocks.concat({ data })
        });
        if (empty === true) empty = false;
        this.getStocks();
    }

    getStocks() {
        for (let i = 0; i < stocks.length; i++) {
            return (
                <Quote c={this.stocks[i].c} l={this.stocks[i].l} h={this.stocks[i].h} pc={this.stocks[i].pc} o={this.stocks[i].o} />
            );
        }
    }
}

Index.getStaticProps = async () => {
    if (Stocks.empty === true) {

    }
    else {

    }
}

export default Index;