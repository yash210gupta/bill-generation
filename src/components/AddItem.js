import React from 'react'

class AddItem extends React.Component {
    constructor() {
        super()
        this.state = {
            product:{},
        }
    }
    style = {
        borderStyle: 'solid',
        borderWidth: 'thin'
    }
    buttonStyle = {
        color: 'grey',
        marginRight: 20
    }
    
    handleForm(event){
        event.preventDefault();
    }

    products = [];
    total = 0;

    handleSubmit(event){
        event.preventDefault();
        let name = event.target.item_name.value;
        let price = event.target.price.value;
        this.products.push([name, price]);
        this.setState(prevState =>({
            product: this.products,
        }))
        this.total+=Number(event.target.price.value);
        this.props.onGettingProduct({
            product:this.state.product,
            total:this.total
        });

    }

    resetForm(){
        this.products = []
        this.setState({product:this.products})
        this.props.onGettingProduct({
            product:{},
            total:0
        })
    }
    render(){
        return (
            <div>
                <form className="item-box" onSubmit={this.handleSubmit.bind(this)}>
                    <label>Item name
                        <input type="text" name="item_name" 
                            style={this.style} onChange={this.handleForm.bind(this)}
                        />
                    </label>
                    <br/>
                    <label>Price
                        <input type="text" name="price" 
                            style={this.style} onChange={this.handleForm.bind(this)}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        <input type="submit" value="Add" style={{color:'grey'}}/>
                    </label>
                </form>
                <br/>
                    <button style={this.buttonStyle} onClick={this.resetForm.bind(this)}>Reset</button>
            </div>


                
        )
    }
}

export default AddItem