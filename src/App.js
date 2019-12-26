import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            apiIsLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    apiData: json,
                    apiIsLoaded: true
            });
        });
    }

    render() {
        let { apiData, apiIsLoaded } = this.state;
        return(
            <div style={{textAlign: "center", fontSize: "4em", lineHeight: "100vh"}}>
                {!apiIsLoaded ? 'Loading!' : 'Bitcoin price is: ' + apiData.bpi.USD.rate_float.toFixed(2) + '$ USD'}
            </div>
        )
    }
}

export default App;
