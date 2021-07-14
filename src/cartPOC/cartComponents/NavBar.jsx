import React from 'react';
import {connect} from 'react-redux';
console.log(4);
function NavBar(props) {

    let cartCount = props.cartItems;

    return (
        <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
            NavBar
            <span style={{ marginLeft: "4rem" }}>{cartCount}</span>
        </div>
    )
}

const mapStateToProps = store => {
    return store;
}


export default connect(mapStateToProps)(NavBar);
