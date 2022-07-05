import { Component } from "react";
import "./product-search.css"

class ProductSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onUpdateSearchLocal = (e) => {
        const term = e.target.value;
        this.setState({term: term})
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                type="text"
                className="product-search-panel-input"
                placeholder="find good"
                value={this.state.term}
                onChange={this.onUpdateSearchLocal}/>
        )
    }
}

export default ProductSearch;