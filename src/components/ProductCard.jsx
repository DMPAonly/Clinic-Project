import style from "../assets/productlist.module.css";

function ProductCard(props) {
    return (
        <div className={style.productCard}>
            <img src={props.img_src} alt={props.title} className={style.productImage} />
            <div className={style.productInfo}>
                <h2 className={style.productTitle}>{props.title}</h2>
                <p className={style.productDescription}>{props.desc}</p>
                <br></br>
                <p className={style.productDescription}><b>{props.price}</b></p>
            </div>
        </div>
    )
}

export default ProductCard;