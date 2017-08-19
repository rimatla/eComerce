import React, {Component} from 'react';
import ShopItem from '../ShopItem/ShopItem';

import './Shop.css';
import fakeData from '../../fakeData';


class Shop extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        let first10 = fakeData.slice(0, 10);
        this.setState({
            items: first10
        })
    }
    render() {
        return (
            <div>
                <div className="shop-container">
                    <div className="items-container">
                        {this.state.items
                            .map(item => <ShopItem item={item}></ShopItem>)
                        }
                    </div>
                    <div className="cart-container">here is car</div>
                </div>
            </div>
        )
    }
}

export default Shop;