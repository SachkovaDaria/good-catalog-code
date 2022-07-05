import { Component } from "react";

import "./product-add-form.css"

class ProductAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: '',
            price:''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.good, this.state.price);
        this.setState({
            good: '',
            price: ''
        })
    }

    render() {
        const { good, price } = this.state
        return (
            <div className="product-add-form">
                <h2 className="product-add-form_title">Add a new good</h2>
                <form className="add-form" onSubmit = {this.onSubmit}>

                    <input type="text"
                        className="add-form-item add-form-name"
                        placeholder="good name"
                        name="good"
                        value={good}
                        onChange={this.onValueChange}
                        required />

                    <input type="number"
                        className="add-form-item add-form-price"
                        placeholder="price in $"
                        name="price"
                        value={price}
                        onChange={this.onValueChange} 
                        required/>

                    <button type="submit" className="add-form-btn">add</button>

                </form>
            </div>
        )
    }

}


export default ProductAddForm;
