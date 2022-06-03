import { logDOM } from "@testing-library/react";
import React from "react";

class Table extends React.Component {
    constructor(props) {
        super(props)
    }

    getResilt(time, percent, money) {
        
       let renderdResult = new Array(time).fill().map((_, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{(percent / time).toFixed(2)}</td>
                    <td>{(money / time).toFixed(2)}</td>
                    <td>{(percent / time + money / time).toFixed(2)}</td>
                </tr>
            )
        })
        
        return renderdResult;
        

    }

    render() {
        const { money, percent, time, result } = this.props
        
        return (
             <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Term</th>
                            <th scope="col">Payable interest</th>
                            <th scope="col">Partial repayment of the loan</th>
                            <th scope="col">General payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getResilt(time, percent, money)}
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col">General</th>
                            <th scope="col">{percent}</th>
                            <th scope="col">{money}</th>
                            <th scope="col">{result}</th>
                        </tr>
                    </thead>
                </table>

             </div>
        );
    }
}

export default Table;