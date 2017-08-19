import React, {Component} from 'react';
import './ShopItem.css';

class ShopItem extends Component {
    render() {
        return (
            <div className="item">
                <div>
                    <img src={this.props.item} alt=""/>
                </div>
            </div>
        )
    }
}

export default ShopItem;