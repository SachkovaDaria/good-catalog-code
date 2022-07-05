
import { Component } from "react";
import "./product-list-item.css"

class ProductListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPrice: ''
        }
    }

    onChangePriceLocal = (e) => {
        const id = Number(e.target.getAttribute("data-id"));
        const newPrice = e.target.value.replace('$', '');

        if (!(/^[0-9]+$/.test(newPrice))) {
            alert("you can use only numbers and before $");
            e.target.value = newPrice.replace(/[a-z]/, '') + "$";
        } else {
            this.setState({ newPrice })
            this.props.onChangePrice(id, Number(newPrice))
        }
    }


    render() {
        const { id, good, price, onDelete, onToggleOffer, onToggleFavorite, offer, favorite } = this.props;

        return (

            <li className={offer ? 'product-list-item offer' : 'product-list-item'} >
                <span className="product-list-item-label">{good}</span>
                <input data-id={id} type="text" onChange={this.onChangePriceLocal} className="product-list-item-price" defaultValue={price + '$'} />
                <div className="product-list-item-btns">
                    <button onClick={onToggleOffer} className={offer ? 'product-list-item-btn active' : 'product-list-item-btn'} type="button">
                        <span className="btn-offer"></span>
                    </button>
                    <button onClick={onToggleFavorite} className={favorite ? 'product-list-item-btn  active' : 'product-list-item-btn'} type="button">
                        <span className="btn-fav"></span>
                    </button>
                    <button onClick={onDelete} className='product-list-item-btn' type="button">
                        <span className="btn-del"></span>
                    </button>
                </div>
            </li>
        );
    }
}


export default ProductListItem;