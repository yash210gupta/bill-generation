import React from 'react'
import ReactDom from 'react-dom'

import '../style.css'
import AddItem from './AddItem'

class LeftComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            product_details:[]
        }
    }
    product = null;
    handleProducts(product){
        this.setState({product_details:product.product},()=>{
            console.log("state updated", this.state.product_details)
        });
        this.product = product
    }

    sendBillGenerated(){
        if(this.product!=null)
            this.props.onBillGenerate(this.product)
    }
    
    buttonStyle = {
        color: 'grey',
        marginRight: 20
    }
    
    render(){
        return (
            <div className="left-side">
                <AddItem onGettingProduct={this.handleProducts.bind(this)}/>
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <th>Product No</th>
                            <th> Item </th>
                            <th> Price </th>
                        </tr>
                        {
                            this.state.product_details.length ?
                            this.state.product_details.map((value, index) => {
                                return(
                                    <tr>
                                        <td> {index} </td>
                                        <td> {value[0]} </td>
                                        <td> {value[1]} </td>
                                    </tr>
                                )
                            }) : null  
                        }
                    </tbody>
                </table>
                <br/>
                <button style={this.buttonStyle} onClick={this.sendBillGenerated.bind(this)}>Generate Bill</button>
            </div>
        )
    }
}
export default LeftComponent
