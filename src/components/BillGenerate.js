import React from 'react'
import ReactDom from 'react-dom'

import '../style.css'
import AddItem from './AddItem'
import LeftComponent from './LeftComponent'

import RightComponent from './RightComponent'

class BillGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            total : 0,
            gst : 0
        }
    }
    bills = [];
    handleGeneratedBill(product){
        console.log('product')
        this.setState({
            total: product.total,
            gst: Math.ceil(product.total*0.18)
        },() => {
            this.bills.push([this.state.total, this.state.gst, this.state.total+this.state.gst])
        })
    }
    render(){
        return(
            <div>
                <div className="box">
                        <LeftComponent onBillGenerate={this.handleGeneratedBill.bind(this)}/>
                        <div className="items-div"> 
                            { 
                                this.bills.length ?
                                    this.bills.map((value, index) => {
                                    return(
                                        <RightComponent sendData={value}/>    
                                    )
                                }): null
                            }
                        </div>
                </div>
            </div>
        )
    }
}
export default BillGenerator
