import './product-summary.css'

const ProductSummary = ({goods, offer, favorite}) => {
    return (
        <div className="product-summary">
            <h2 className="product-summary_title">Total</h2>
            <p className="product-summary_text" >number of goods: {goods}</p>
            <p className="product-summary_text">number of goods with special offer: {offer}</p>
            <p className="product-summary_text">number of best-sale goods: {favorite}</p>
        </div>
    )
}

export default ProductSummary;