import React from 'react'
import ReactDom from 'react-dom'

import '../style.css'

class RightComponent extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <table style={{margin:25}}>
                        <tbody>
                            <tr>
                                <th>Amount</th>
                                <th> GST </th>
                                <th> TOTAL </th>
                            </tr>
                            <tr>
                                <td> {this.props.sendData[0]} </td>
                                <td> {this.props.sendData[1]} </td>
                                <td> {this.props.sendData[1]+this.props.sendData[0]} </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default RightComponent
