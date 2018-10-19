import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';

class MainContent extends React.Component{

    handleClick(){
        console.log('you clicked');
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
