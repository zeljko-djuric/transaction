import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import Web3 from 'web3';

class MainContent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            adress: ''
        }
    }

    updateInput = (event) =>{
        this.setState({adress : event.target.value})
    }


    handleClick = () =>{
        let web3js = new Web3(window.web3.currentProvider);
        web3js.eth.sendTransaction({
            to: this.state.adress,
            from: '0x1dC898665B762C781Ff6110dA46B83EE6Cb5C791',
            value: web3js.utils.toWei('0.2','ether')
        })
    }
    render(){
        return(
            <div>
            <h1> Transaction</h1>
            <Row>
                <Col span={8}>
                    <Input type="text" onChange={this.updateInput} placeholder="Value"/>
                </Col>
                <Col span={8}>
                    <Button type="primary" onClick={this.handleClick}>Send</Button>
                </Col>
            </Row>
            
            </div>
        )
    }
}

export default MainContent;
