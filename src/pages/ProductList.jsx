import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import style from "../assets/productlist.module.css";

function ProductList() {
    useEffect(() => {
        document.title = "List of Products";
        getList();
    }, []);

    const [hover, setHover] = useState();
    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [order, setOrder] = useState({customerName: "", email: "", productName: "", productId: "", quantity: 0, address: "", pincode: 0});
    const [orderedProduct, setOrderedProduct] = useState({id: "", name: "", img: "", price: "", quantity: "", description: ""});
    const [price, setPrice] = useState(0);

    function handleCancel() {
        setOrder({customerName: "", email: "", productName: "", productId: "", quantity: 0, address: "", pincode: 0});
        setOrderedProduct({id: "", name: "", img: "", price: "", quantity: "", description: ""});
        setShowModal(false);
    }

    function handleOrder(l) {
        setOrder((pre) => {
            return {...pre, productName: l.name, productId: l.id}
        });
        setOrderedProduct(l);
        setShowModal(true);
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if(name == "quantity"){
            const price = parseInt(orderedProduct.price);
            setPrice(value*price);
        }
        setOrder((pre) => {
            return {...pre, [name]: value};
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(order.quantity <= orderedProduct.quantity) {
            const newQuantity = orderedProduct.quantity - order.quantity;
            const updateProduct = {...orderedProduct, quantity: newQuantity};
            try{
                const response = await axios.post("http://localhost:8080/orders/placeOrder", order);
                const result = await axios.patch("http://localhost:8080/products/updateProduct", updateProduct);
                console.log(response.data);
                console.log(result.data);
                alert("Order placed");
            } catch(error) {
                alert("Error placing order");
                console.error("Error placing order: ", error);
            } finally{
                setOrder({customerName: "", email: "", productName: "", productId: "", quantity: 0, address: "", pincode: 0});
                setOrderedProduct({id: "", name: "", img: "", price: "", quantity: "", description: ""});
                setShowModal(false);
            }
        } else{
            alert("Your desired quantity is currently not available");
        }
    }

    function truncateText(text) {
        const maxLength = 100;
        if(text.length <= maxLength){
            return text;
        } else{
            return text.substring(0, maxLength) + '...';
        }
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
                    <div key={i}>
                        <div className={style.productCard} onMouseEnter={() => setHover(l.id)} onMouseLeave={() => setHover(null)}>
                            <img src={l.img} alt={l.name} className={style.productImage} />
                            <div className={style.productInfo}>
                                <h2 className={style.productTitle}>{hover == l.id ? l.name : truncateText(l.name)}</h2>
                                <p className={style.productDescription}>{hover == l.id ? l.description : truncateText(l.description)}</p>
                                <br></br>
                                <p className={style.productPrice}>₹{l.price}</p>
                                <button type="button" className="custom-btn-1 btn-sm btn-info mr-2" onClick={() => handleOrder(l)}>Place Order</button>
                            </div>
                        </div>
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
                                    <input type="text" className="form-control" name="customerName" value={order.customerName} onChange={handleChange} required />
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
                                <button type="button" className="custom-btn-2 btn-sm btn-danger" onClick={handleCancel}>Cancel</button>
                                <button type="submit" className="custom-btn-1 btn-sm btn-info mr-2">Pay ₹{price}</button>
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