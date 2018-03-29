import React from 'react';
import {
    Row, Col,
    InputGroup, Input
} from 'reactstrap';
import Select from 'react-select';

var selectMain = [
    { value: 'flowers', label: 'Цветы' },
    { value: 'toys', label: 'Игрушки' },
    { value: 'food', label: 'Еда' }
  ];
var flowers = [
    { value: 'rose', label: 'Розы' },
    { value: 'lilies', label: 'Лилии' },
    { value: 'daffodils', label: 'Нарциссы' }
  ];
var toys = [
    { value: 'doll', label: 'Кукла' },
    { value: 'constructor', label: 'Конструктор' },
    { value: 'railway', label: 'Железная дорога' }
  ];
var food = [
    { value: 'pizza', label: 'Пицца' },
    { value: 'roll', label: 'Ролл' },
    { value: 'burgers', label: 'Бургер' }
  ];
var counts = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 8, label: '8' },
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 20, label: '20' },
    { value: 25, label: '25' },
    { value: 30, label: '30' }
  ];

class Step2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectOne : null,
            selectTwo : null,
            selectThree : null,
            valSelectTwo: null,
            disSelectTwo: false,
            disSelectThree: false
        }
    }

    isValidated(){
        if(this.state.selectOne === null || this.state.selectTwo === null || this.state.selectThree === null){
            return false;
        }
        return true;
    }

    changeSelectOne = (value) => {
        this.setState({ selectOne: value.value, disSelectTwo: true, selectTwo: null }, () => this.state.selectTwo ? null : this.setState({ disSelectThree: false, selectThree: null }) );

        switch(value.value) {
            case "flowers":
                this.setState({ valSelectTwo: flowers});
                break;
            case "toys":
                this.setState({ valSelectTwo: toys});
                break;
            case "food":
                this.setState({ valSelectTwo: food});
                break;
            default:
                this.setState({ valSelectTwo: null});
                break;
        }
    }

    render(){
        return (
            <div>
                <h5 className="info-text">Step 2</h5>
                <Row className="justify-content-center">
                    <Col xs={12} lg={4}>
                        <Select
                            placeholder="Категория подарка"
                            name="SelectOne"
                            value={this.state.selectOne}
                            options={selectMain}
                            onChange={(value) => this.changeSelectOne(value)}
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        { this.state.disSelectTwo ? <Select
                            placeholder="Подарок"
                            name="SelectTwo"
                            value={this.state.selectTwo}
                            options={this.state.valSelectTwo} 
                            onChange={(value) => this.setState({ selectTwo: value, disSelectThree: true })}
                        /> : "" }
                    </Col>
                    <Col xs={12} lg={4}>
                        { this.state.disSelectThree ? <Select
                            placeholder="Количество"
                            name="SelectThree"
                            value={this.state.selectThree}
                            options={counts}
                            onChange={(value) => this.setState({ selectThree: value})}
                        /> : "" }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step2;