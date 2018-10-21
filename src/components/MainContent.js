import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import Web3 from 'web3';
import styled from 'styled-components';
import Converter from './Converter.js';

const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
    padding-left: 36em;
`;

const InputCool = styled(Input)`
    margin-bottom: 1em !important;
`;

class MainContent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            address: '',
            amount: 0
        }
    }

    updateAddress = (event) =>{
        this.setState({address : event.target.value})
    }

    
    updateAmount = (event) =>{
        this.setState({amount : event.target.value})
        console.log(this.state.amount)
    }

    handleClick = () =>{
        let web3js = new Web3(window.web3.currentProvider);
        web3js.eth.sendTransaction({
            to: this.state.address,
            from: '0x1dC898665B762C781Ff6110dA46B83EE6Cb5C791',
            value: web3js.utils.toWei(this.state.amount.toString(),'ether')
        })
    }

  

    render(){
        return(
            <Wrapper>
            <h1>Ethereum Transaction</h1>
            <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <InputCool type="text" onChange={this.updateAddress} placeholder="Address To"/>
                </Col>
            </Row>

            <Row>
            <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <InputCool type="text"  onChange={this.updateAmount} placeholder="ETH Amount"/>
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <Converter ethAmount={this.state.amount}/>
                </Col>
            </Row>
             <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <Button type="primary" onClick={this.handleClick}>Send</Button>
                </Col>
            </Row>
            
            </Wrapper>
        )
    }
}

export default MainContent;
