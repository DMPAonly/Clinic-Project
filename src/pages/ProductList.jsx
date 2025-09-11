import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard"
import style from "../assets/productlist.module.css";

function ProductList() {
    useEffect(() => {
        document.title = "List of Products";
        getList();
    }, []);

    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [order, setOrder] = useState({name: "", email: "", product_name: "", product_id: "", quantity: 0, address: "", pincode: 0});

    function handleOrder(l) {
        setOrder((pre) => {
            return {...pre, product_name: l.name, product_id: l.id}
        });
        setShowModal(true);
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setOrder((pre) => {
            return {...pre, [name]: value};
        });
    }

    function handleSubmit() {

    }

    async function getList() {
        const response = await axios.get("http://localhost:8080/products/getAll");
        setList(response.data);
    }

    return (
        <main>
        <div id="product-list" className={style.productList}>
            {list.map((l, i) => {
                return (
                    <div>
                        <ProductCard key={i} img_src={l.img} title={l.name} desc={l.description} price={l.price}/>
                        <button type="button" onClick={() => handleOrder(l)}>Place Order</button>
                    </div>
                );
            })}
        </div>
        {/*Modal*/}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Place Order</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" className="form-control" name="name" value={order.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" value={order.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input type="number" className="form-control" name="quantity" value={order.quantity} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" name="address" value={order.address} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Pin Code</label>
                                    <input type="number" className="form-control" name="pincode" value={order.pincode} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="custom-btn-2 btn-sm btn-danger" >Cancel</button>
                                <button type="submit" className="custom-btn-1 btn-sm btn-info mr-2">Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*End Modal*/}
        </main>
    )
}

export default ProductList;