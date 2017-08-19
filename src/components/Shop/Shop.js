import React, {Component} from 'react';
import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';

import './Shop.css';
import fakeData from '../../fakeData';


class Shop extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            cart: []
        };
        this.addToCart = this.addToCart.bind(this);
    }
    componentDidMount() {
        let first10 = fakeData.slice(0, 10);
        this.setState({
            items: first10
        })
    }

    //add items to cart
    addToCart(id) {
        //console.log(id);
        let itemSelected = this.state.items.find(item => item.id === id);
        let newCart = [...this.state.cart, itemSelected];
        this.setState({
            cart: newCart
        })

    }

    render() {
        return (
            <div>
                <div className="shop-container">
                    <div className="items-container">
                        {this.state.items
                            //add unique key id
                            .map(item =>
                                <ShopItem
                                    key={item.id}
                                    item={item}
                                    addToCart={this.addToCart}
                                >
                                </ShopItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}></Cart>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;