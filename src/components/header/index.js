import React from "react";
import { Button, Segment } from 'semantic-ui-react';
import './style.css';
import './script.js';
import Table from "../table";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loan_amount: 100000,
            annual_interest_rate: 0,
            maturity_date: '',
            time: 'year',
            month: 0,
            percent: 0,
            result: 0,
            byDefolt: false,
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

     onChangeHandler = (e) => {
        this.setState({...this.state, [e.target.name] : e.target.value});
    }

    onInput() {
        let input = document.getElementById("typeinp_loan_amount");
        let input_annual_interest_rate = document.getElementById("typeinp_annual_interest_rate");

        let currentVal_loan_amount = input.value;
        let currentVal_annual_interest_rate = input_annual_interest_rate.value;
        
        this.setState({
            loan_amount: currentVal_loan_amount,
            annual_interest_rate: currentVal_annual_interest_rate,
        })
    }
    

    onSubmitHandler(e) {
        e.preventDefault()
        let money = +this.state.loan_amount;
        let percent = +this.state.annual_interest_rate;
        let maturity_date = +this.state.maturity_date;
        let timeVariant = this.state.time;
        let getMonth = this.state.month;
        let getpercent = this.state.percent;
        
        if(timeVariant === 'year') {
            getMonth = maturity_date * 12;
        }

        getpercent = money * percent / 100;
        let result = ( getpercent + money ) / maturity_date;

        this.setState({
            byDefolt: true,
            result,
            month: getMonth,
            percent: getpercent,
        })
        
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="col text-center mb-3">
                        <h1 className="fw-bold">Loan Calculator</h1>
                    </div>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className='row'>

                            <div className="col-12 col-md-4 position-relative">
                                <label className="form-label fw-bold" htmlFor="loan_amount">Loan amount</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">$</div>
                                    </div>
                                    <input type="text" name="loan_amount" value={this.state.loan_amount} onChange={this.onChangeHandler} className="form-control text-center" id="loan_amount" />
                                </div>
                                <input type="range" id="typeinp_loan_amount" min="100000" max="50000000" step="100" defaultValue="100000" onInput={this.onInput.bind(this)}/>
                            </div>

                            <div className="col-12 col-md-4 position-relative">
                                <label className="form-label fw-bold" htmlFor='annual_interest_rate'>Annual interest rate</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">%</div>
                                    </div>
                                    <input type="text" name="annual_interest_rate" value={this.state.annual_interest_rate} onChange={this.onChangeHandler} className="form-control text-center" id="annual_interest_rate" />
                                </div>
                                <input type="range" id="typeinp_annual_interest_rate" min="0" max="100" step=".5" defaultValue="0" onInput={this.onInput.bind(this)}/>
                            </div>

                            <div className="col-12 col-md-4">
                                <label className="form-label fw-bold" htmlFor='maturity_date'>Maturity date:</label>
                                <div className="row">
                                    <div className="col-7">
                                        <input type="number" name="maturity_date" value={this.state.maturity_date} onChange={this.onChangeHandler} className="form-control" id="maturity_date" placeholder="Maturity date:" required/>
                                    </div>
                                    <div className="col-5 ps-0">
                                        <select onChange={this.onChangeHandler} name="time" value={this.state.time}  className="form-control" id="time">
                                            <option value='year'>Year</option>
                                            <option value='month'>Month</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='text-end mt-3'>
                                <button type="submit" className="btn btn-warning">Calculate</button>
                            </div>
                        </div>
                    </form>
                    <hr />
                </div>

                {this.state.byDefolt && <Table 
                    money={this.state.loan_amount} 
                    percent={this.state.percent} 
                    time={this.state.month} 
                    result={this.state.result}
                 />}
            </div>
        );
    }
    
}

export default Header;
