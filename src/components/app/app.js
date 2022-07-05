import { Component } from 'react'

import Header from '../header/header'
import ProductSummary from '../product-summary/product-summary'
import ProductSearch from '../product-search/product-search'
import ProductFilter from '../product-filter/product-filter'
import ProductList from '../product-list/product-list'
import ProductAddForm from '../product-add-form/product-add-form'

import 'bootstrap/dist/css/bootstrap.css'
import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { good: 'laptop', price: 600, offer: false, favorite: true, id: 1 },
                { good: 'fan', price: 300, offer: true, favorite: false, id: 2 },
                { good: 'smartphone', price: 400, offer: false, favorite: false, id: 3 },
                { good: 'iron', price: 100, offer: false, favorite: false, id: 4 },
                { good: 'coffee machine', price: 500, offer: false, favorite: false, id: 5 },
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 6;
    }



    onChangePrice = (id, newPrice) => {
        this.setState(({ data }) => {
            console.log(data);
            const i = data.findIndex(elem => elem.id === id);
            const old = data[i];
            const newItem = { ...old, price: newPrice };
            const newArr = [...data.slice(0, i), newItem, ...data.slice(i + 1)];
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }



    dataFIlter = (data, filter) => {
    
        if (filter === 'more200') {
            return data.filter(item => {
                return item.price > 200
            });
        }
        if (filter === 'offers') {
            return data.filter(item => {
                return item.offer === true
            });
        }
        if (filter === 'favorite') {
            return data.filter(item => {
                return item.favorite === true
            });
        }

        return data;

    };

    onUpdateFilter = (filter) => {
        this.setState({ filter: filter })
    }

    arrSearch = (elements, term) => {
        if (term.length === 0) {
            return elements;
        }

        return elements.filter(element => {
            return element.good.indexOf(term) > -1
        });
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term })
    }

    deleteGood = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (good, price) => {
        const newGood = {
            good,
            price,
            offer: false,
            favorite: false,
            id: this.maxId++
        }

        this.setState(({ data }) => {
            const newArr = [...data, newGood];
            return {
                data: newArr
            }
        });
    }

    onToggleOffer = (id) => {
        this.setState(({ data }) => {
            const i = data.findIndex(elem => elem.id === id);
            const old = data[i];
            const newItem = { ...old, offer: !old.offer };
            const newArr = [...data.slice(0, i), newItem, ...data.slice(i + 1)];

            return {
                data: newArr
            }
        })

    }
    onToggleFavorite = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, favorite: !item.favorite }
                }
                return item;
            })
        }))
    }



    render() {
        const { data, term, filter } = this.state;
        const goods = this.state.data.length;
        const offer = this.state.data.filter(item => item.offer).length;
        const favorite = this.state.data.filter(item => item.favorite).length;
        const visibleData = this.dataFIlter(this.arrSearch(data, term), filter);
       
      
        return (
            <div className="App">
                <Header />
                <div className="product-search-panel">
                    <ProductSearch onUpdateSearch={this.onUpdateSearch} />
                    <ProductFilter onUpdateFilter={this.onUpdateFilter}
                        filter={filter} />
                </div>
                <ProductList
                    data={visibleData}
                    onDelete={this.deleteGood}
                    onToggleOffer={this.onToggleOffer}
                    onToggleFavorite={this.onToggleFavorite}
                    onChangePrice={this.onChangePrice} />
                <ProductSummary
                    goods={goods}
                    offer={offer}
                    favorite={favorite} />
                <ProductAddForm
                    addItem={this.addItem} />
            </div>
        );
    }
}


export default App;
