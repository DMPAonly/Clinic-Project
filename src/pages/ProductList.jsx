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

    async function getList() {
        const response = await axios.get("http://localhost:8080/products/getAll");
        setList(response.data);
    }

    return (
        <main>
        <div id="product-list" className={style.productList}>
            {list.map((l, i) => {
                return <ProductCard key={i} img_src={l.img} title={l.name} desc={l.description} price={l.price}/>
            })}
        </div>
        </main>
    )
}

export default ProductList;