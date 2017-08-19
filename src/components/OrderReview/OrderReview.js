import React, {Component} from 'react';
import {getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager'; //local storage
import fakeData from '../../fakeData';
import './OrderReview.css';
import giphy from '../../images/giphy.gif';



class OrderReview extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            isOrdered: false
        };

        this.removeItem = this.removeItem.bind(this);
        this.placeOrder = this.placeOrder.bind(this);

    }
    componentDidMount() {
        let savedCart = getDatabaseCart();
        //console.log(savedCart);
        let selectedIds = Object.keys(savedCart);
        let savedItems = selectedIds.map(id => {
            let item = fakeData.find(item => item.id === id);
            item.quantity = savedCart[id];
            return item;
        });

        this.setState({
            items: savedItems
        })
    }
    removeItem(id) {
        console.log(id);
        let remainingItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: remainingItems
        });
        removeFromDatabaseCart(id);
    }

    placeOrder() {
        this.setState({
            isOrdered: true
        })
    }
    render() {
        let displayHTML = null;
        if (this.state.isOrdered) {
            displayHTML = <img src={giphy} alt="Giphy"/>
        } else {
            displayHTML = this.state.items.map(item =>
                <li
                    key={item.id}>{item.name}<button onClick={()=> this.removeItem(item.id)}>remove</button>
                </li>
            )
        }

        return (
            <div className="review-container">
                <button onClick={this.placeOrder}>Place Order</button>
                {displayHTML}
            </div>
        )
    }
}

export default OrderReview ;