import React, {Component} from 'react';
import './ShopItem.css';
import Rating from 'react-rating';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class ShopItem extends Component {
    render() {
        //console.log(this.props.item);
        const item = this.props.item;
        return (
            <div className="item">
                <div>
                    <img src={item.img} alt="Items Image"/>
                </div>
                <div>
                    <h4 className="item-header">{item.name}</h4>
                    <p><small>by: {item.seller}</small></p>
                    <div className="item-description">
                        <div>
                            <p>${item.price}</p>
                            <p><small>Only {item.stock} left in stock</small></p>
                            <button>add to cart</button>
                        </div>
                        <div>
                            <Rating
                                className="ratings"
                                empty="fa fa-star-o"
                                full="fa fa-star"
                                placeholder="fa fa-star"
                                placeholderRate={item.star}
                                readonly
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopItem;