import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    async function getOrders() {
        const response = await axios.get("http://localhost:8080/orders/getOrders");
        setOrders(response.data);
    }

    return (
        <>
            <h3>Pending Orders</h3> 
            <div className="table-responsive small"> 
                <table className="table table-striped table-sm"> 
                    <thead> 
                        <tr className="table-header"> 
                            <th scope="col">S.no.</th> 
                            <th scope="col">Customer Name</th> 
                            <th scope="col">Product Name</th> 
                            <th scope="col">Product Id</th> 
                            <th scope="col">Quantity</th>
                            <th scope="col">Address</th>
                            <th scope="col">Pincode</th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        {orders.map((order, index) => (
                        <tr key={orders.id}>
                            <td>{index + 1}</td>
                            <td>{order.customerName}</td>
                            <td>{order.productName}</td>
                            <td>{order.productId}</td>
                            <td>{order.quantity}</td>
                            <td>{order.address}</td>
                            <td>{order.pincode}</td>
                        </tr>
                        ))}
                    </tbody>
                </table> 
            </div> 
        </>
    )
}

export default Orders;