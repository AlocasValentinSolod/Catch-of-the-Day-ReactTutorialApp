import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from "../helpers";


class Fish extends React.Component{
    static propsTypes = {
        details: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number,
        }),
        addToOrder: PropTypes.func
    };

    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };

    render(){
        const { name, image, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';

        return (
            <Fragment>
                <li className={'menu-fish'}>
                    <img src={image} alt={name}/>
                    <h3 className={'fish-name'}>
                        {name}
                        <span className={'price'}>{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                    <button onClick={this.handleClick} disabled={!isAvailable}> {isAvailable ? "Add to Card" : "Sold Out"} </button>
                </li>
            </Fragment>
        );
    }
}

export default Fish;