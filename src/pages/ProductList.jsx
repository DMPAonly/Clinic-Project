import { useState } from "react"
import { useEffect } from "react";
import ProductCard from "../components/ProductCard"
import style from "../assets/productlist.module.css";

function ProductList() {
    useEffect(() => {
        document.title = "List of Products";
    }, []);

    const [list, setList] = useState([
        {
            "img": "/img/product-photos/1957060443.jpg", 
            "title": "product1", 
            "description": "Lorem Ipsum Lorem Ipsum"
        }, {
            "img": "/img/product-photos/1957060443.jpg", 
            "title": "product2", 
            "description": "Lorem Ipsum Lorem Ipsum"
        }]);

    return (
        <main>
        <div id="product-list" className={style.productList}>
            {list.map((l, i) => {
                return <ProductCard key={i} img_src={l.img} title={l.title} desc={l.description} />
            })}
        </div>
        </main>
    )
}

export default ProductList;