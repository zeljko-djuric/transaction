import React from 'react';
import axios from 'axios';

class Converter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ethAmount: 0,
            ethPriceUsd: 0
        }
    }

    componentWillReceiveProps(){
        this.setState({
            ethAmount: this.props.ethAmount
        })
    }

    componentDidMount(){
        axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/').then((data) =>{
            console.log(data.data)
            console.log(data.data[0].price_usd)
            console.log('responding request')
            this.setState({
                ethPriceUsd: data.data[0].price_usd
            })
        })
    }

    render(){
        return(
            <div>
                {this.state.ethAmount} = ${this.state.ethPriceUsd * this.state.ethAmount}
            </div>
        )
    }

}


export default Converter;