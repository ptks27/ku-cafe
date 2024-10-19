import React, { Component } from "react";


class Calculator extends Component {

    showOrders(orders) {
        if(!orders || orders.length == 0) {
            return <h5 className="text-right text-danger title"> ไม่มีสินค้า </h5>
        } else {
            return orders.map(order => {
                return(
                <h5 className="text-right text-secondary title" key={order.product.id}>
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-right btn-sm text-secondary" onClick={() => this.props.onDelOrder(order.product)}> THB </button>
                        <button className="btn btn-right btn-sm text-danger" onClick={() => this.props.onDelOrder(order.product)}><h3> X </h3></button>
                </h5>
                )

            })

        }
    }
    render() {
        const{ totalPrice , orders } = this.props;


        return(
            <div>
                <h1 className="text-right"> {totalPrice} THB </h1>
                <hr/>
                <ul className="list=unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr/>
                <button className="btn btn-block btn-success title" onClick={() => this.props.onConfirmOrder()}> ยืนยันการจอง </button>
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onCancelOrder()}> ยกเลิก </button>

            </div>
        );
    }
}

export default Calculator;
