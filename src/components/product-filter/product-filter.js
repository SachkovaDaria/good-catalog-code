import "./product-filter.css"


const ProductFilter = (props) => {

    const buttonsData = [
        {name:'all', label: 'all products'},
        {name:'more200', label: 'more than 200$'},
        {name:'offers', label: 'offers'},
        {name:'favorite', label: 'favorites'},
    ];

    const buttonArr = buttonsData.map(({name,label}) => {
        const active = props.filter === name;
        const activeClass = active ? 'btn-light' : 'btn-outline-light';
      
        return (
        <button type="button"
                className={`btn ${activeClass}`}
                key={name}
                onClick = {() => props.onUpdateFilter(name)}>
                {label}
        </button>)
       
     })
    
  
        return (
            <div className="product-filter-btns">
                {buttonArr}
            </div>
        );
}

export default ProductFilter;