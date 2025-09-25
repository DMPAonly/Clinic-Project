import { useEffect, useState } from "react";
import style from "../assets/orderstatus.module.css";
import { useSearchParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function OrderStatus() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState(0);
    const [content, setContent] = useState({}); 

    useEffect(() => {
        getStatus();
    }, []);

    async function getStatus() {
        const id = searchParams.get("id");
        const response = await axios.get(`http://localhost:8080/orders/getStatus/${id}`);
        console.log(response.data);
        setStatus(response.data);
        if(response.data === "PENDING") {
            setContent({title: "Pending Transaction",
            subtitle: "Your transaction is still pending",
            text: "Please wait for your transaction to get completed"});
        } else if(response.data === "COMPLETED") {
            setContent({title: "Completed Transaction",
            subtitle: "Your transaction has been completed",
            text: "Your order "+searchParams.get("id")+"(Your Order ID) has been placed!"});
        } else if(response.data === "FAILED") {
            setContent({title: "Failed Transaction",
            subtitle: "Your transaction has failed",
            text: "Please try to place your order again, no money has been debited from your account."});
        }
    }

    return (
        <div className={style.container}>
            <div className="card" style={{ width: "80%", height: "50%", top: "10rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{content.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{content.subtitle}</h6>
                    <p className="card-text">{content.text}</p>
                    <Link to="/" className="card-link">Go home</Link>
                    <Link to="/ProductList" className="card-link">Look for more Products</Link>
                </div>
            </div>
        </div>
    )
}

export default OrderStatus;