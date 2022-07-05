import ProductListItem from '../product-list-item/product-list-item'
import MockTextFilter from '../mock-text/mock-text'

import "./product-list.css"

const ProductList = ({ data, onDelete, onToggleOffer, onToggleFavorite, onChangePrice }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <ProductListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleOffer={() => onToggleOffer(id)}
                onToggleFavorite={() => onToggleFavorite(id)}
                id={id}
                onChangePrice={onChangePrice}
            />
        )
    })


    return (
        <ul className="product-list">
            {data.length === 0 ? <MockTextFilter /> : elements}
        </ul>
    )
}

export default ProductList; 