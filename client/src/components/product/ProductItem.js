import { Component } from "react";
import { Link } from "react-router-dom";
import ReservationForm  from './ReservationForm';

class ProductItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showReservationForm: false,
      };
    }

    handleReservationClick = () => {
        // Show the reservation form when the "จองห้องพัก" button is clicked
        this.setState({ showReservationForm: true });
      };
    
      handleReservationConfirm = (reservationData) => {
        // Pass the reservation data to the parent component
        this.props.onAddOrder(reservationData);
    
        // Hide the reservation form
        this.setState({ showReservationForm: false });
      };


        render() {
            const {productName, unitPrice, thumbnail,productDescription} = this.props.product;
            return (
                <div className="col-md-4 col-sm-6">
                    <img className="img-fluid img-thumbnail" src={thumbnail} />
                    <h5 className="mt-2"> {productName}</h5>
                    <h5 className="mt-2"> {productDescription}</h5>
                    <p className="title text-right"> {unitPrice} THB</p>
                    {this.props.onAddOrder && (
          <div>
            <button
              className="btn btn-block btn-secondary title"
              onClick={this.handleReservationClick}
            >
              จองห้องพัก
            </button>
            {this.state.showReservationForm && (
              <ReservationForm
                productName={productName}
                onReservationConfirm={this.handleReservationConfirm}
              />
            )}
          </div>
        )}

                    {this.props.onDescription && (
                    <Link to={'/product/${this.props.product.id}'}>
                    <button className="btn btn-block btn-primary title">
                     รายละเอียด</button></Link>
                    )}
                     


                    {(this.props.onDelProduct || this.props.onEditProduct) &&
                        <button className="btn  btn-info col-5 title" onClick={() => this.props.onEditProduct(this.props.product)}>
                        แก้ไข</button>
                    }
                    {(this.props.onDelProduct || this.props.onEditProduct) &&
                        <button className="btn  btn-danger col-5 float-right title"  onClick={() => this.props.onDelProduct(this.props.product)}>
                        ลบ</button>
                    }

                    <hr/>
                </div>
            )
    
        }
}


export default ProductItem;