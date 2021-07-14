import React from 'react';
import { connect } from 'react-redux';


function HomePage(props) {
    let { products } = props;
    return (
        <div style={{ display: "flex" }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image} style={{ height: "20vw" }} />
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button onClick={() => {
                            console.log(12345);
                            props.addItem();
                        }}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchtoProps = dispatch => {
    return {
        addItem: () => {
            return dispatch({ type: "add_item" });
        }
    }
}

const HigherOrderComponent = connect(mapStateToProps, mapDispatchtoProps)(HomePage);

export default HigherOrderComponent;
