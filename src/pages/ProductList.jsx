import { useState } from "react"
import { useEffect } from "react";
import ProductCard from "../components/ProductCard"

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
        <>
        <style>
            {`
                * {
                    box-sizing: border-box;
                }
                h1 {
                    color: #fff;
                    margin-bottom: 1rem;
                    text-shadow: 0 2px 6px rgba(0,0,0,0.3);
                }
                main {
                    padding: 2rem 1rem;
                    background-color: #e9f5d9;
                    min-height: 100vh;
                }
                .product-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    width: 100%;
                    max-width: 1000px;
                }
                .product-card {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }
                .product-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
                }
                .product-image {
                    width: 100%;
                    aspect-ratio: 4 / 3;
                    object-fit: cover;
                }
                .product-info {
                    padding: 1.5rem 1.5rem 2rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .product-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin: 0 0 0.5rem;
                    color: #333;
                }
                .product-description {
                    font-size: 0.95rem;
                    color: #666;
                    line-height: 1.4;
                    flex-grow: 1;
                    margin-bottom: 1rem;
                }
                .product-price {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #4a90e2;
                }
                .product-actions {
                    margin-top: 1rem;
                    display: flex;
                    justify-content: flex-end;
                }
                .btn {
                    background-color: #4a90e2;
                    border: none;
                    border-radius: 6px;
                    padding: 0.5rem 1rem;
                    font-size: 0.95rem;
                    color: white;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .btn:hover {
                    background-color: #357ABD;
                }
                @media (max-width: 480px) {
                    .product-info {
                        padding: 1rem;
                    }
                }
            `}
        </style>
        <main>
        <div id="product-list" className="product-list">
            {list.map((l, i) => {
                return <ProductCard key={i} img_src={l.img} title={l.title} desc={l.description} />
            })}
        </div>
        </main>
        </>
    )
}

export default ProductList;