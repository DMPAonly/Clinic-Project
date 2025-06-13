function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.img_src} alt={props.title} className="product-image" />
            <div className="product-info">
                <h2 className="product-title">{props.title}</h2>
                <p className="product-description">{props.desc}</p>
            </div>
        </div>
    )
}

export default ProductCard;