import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import Web3 from 'web3';

class MainContent extends React.Component{

    handleClick = () => {
            let web3js = new Web3(window.web3.currentProvider); 
            web3js.eth.sendTransaction({
                to: '0x47ef3D23598Dff40e16ec55aa02B9f026124720F',
                from: '0x1dC898665B762C781Ff6110dA46B83EE6Cb5C791',
                value: web3js.utils.toWei('1', 'ether'), 
            })      
    } 
    render(){
        return(
            <div>
            <h1> Transaction</h1>
            <Row>
                <Col span={8}>
                    <Input placeholder="Value"/>
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
