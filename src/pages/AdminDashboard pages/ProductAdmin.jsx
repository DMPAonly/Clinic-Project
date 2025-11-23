import { useState, useEffect } from "react";
import axios from "axios";

function ProductAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({name: "", price: "", quantity: "", description: "", img: ""});
    const [editId, setEditId] = useState(null);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        /*setProducts([{
                id: 1,
                name: "Product-1",
                price: "$10",
                stock: 20,
                desc: "Lorem Ipsum",
                img: "/img/product-photos/1957060443.jpg"
            },
            {
                id: 2,
                name: "Product-2",
                price: "$15",
                stock: 35,
                desc: "Lorem Ipsum",
                img: "/img/product-photos/1957060443.jpg"
            }
        ]);*/
        getProducts();
    }, []);

    async function getProducts() {
        const response = await axios.get("https://clinic-project-backend-production.up.railway.app/products/getAll");
        const result = response.data
        setProducts(result);
        console.log(response.data);
    }

    function handleChange(e) {
        if(e.target.name === 'img'){
            let base64String = "";
            const imgfile = e.target.files[0];
            let reader = new FileReader();
            reader.onload = () => {
                base64String = reader.result;
                setNewProduct((pre) => {
                    return {...pre, img: base64String};
                });
                console.log(newProduct);
            }
            reader.readAsDataURL(imgfile);
            
        } else{
            const name = e.target.name;
            const value = e.target.value;
            setNewProduct({...newProduct, [name]: value});
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        /*const imageURL = newProduct.img ? URL.createObjectURL(newProduct.img) : newProduct.img;
        console.log(imageURL);
        const product = {
            id: editId ? editId : products.length + 1,
            name: newProduct.name,
            price: newProduct.price,
            stock: newProduct.stock,
            desc: newProduct.desc,
            img: imageURL
        }
        if(editId){
            setProducts(products.map((p) => {
                if(p.id === editId){
                    return product;
                } else{
                    return p;
                }
            }));
        } else{
            setProducts([...products, product]);
        }
        setNewProduct({ name: '', price: '', stock: '', desc: '', img: null });
        setEditId(null);
        setShowModal(false);*/
        if(editId){
            try{
                setNewProduct((pre) => {
                    return {...pre, id : editId};
                });
                const response = await axios.patch("https://clinic-project-backend-production.up.railway.app/products/updateProduct", newProduct);
                console.log(response);
            } catch(err){
                console.error("Error updating data: ", err);
            } finally{
                setNewProduct({name: '', price: '', quantity: '', description: '', img: null });
                setEditId(null);
                setShowModal(false);
                getProducts();
            }
        } else{
            try{
                console.log(newProduct);
                const response = await axios.post("https://clinic-project-backend-production.up.railway.app/products/insertProduct", newProduct);
                console.log(response);
            } catch(err){
                console.error("Error updating data: ", err);
            } finally{
                setNewProduct({name: '', price: '', quantity: '', description: '', img: null });
                setShowModal(false);
                getProducts();
            }
        }  
    }

    function handleEdit(product) {
        setNewProduct(product);
        setEditId(product.id);
        setShowModal(true);
        console.log(product);
        console.log(product.id);
    }

    async function handleDelete(id) {
        try{
            const response = await axios.delete(`https://clinic-project-backend-production.up.railway.app/products/deleteProduct/${id}`);
            console.log(response);
            getProducts();
        } catch(err) {
            console.error("Error deleting Product: ", err);
        }
    }

    return (
        <>
            <h3>Available Products</h3> 
            <div className="table-responsive small"> 
                <table className="table table-striped table-sm"> 
                    <thead> 
                        <tr> 
                            <th scope="col">S.no.</th> 
                            <th scope="col">Name</th> 
                            <th scope="col">Price</th> 
                            <th scope="col">Stock</th> 
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.description}</td>
                            <td><img src={product.img} alt={product.name} width="80" /></td>
                            <td>      
                                <button className="custom-btn-1 btn-sm btn-info mr-2" onClick={() => handleEdit(product)}
                                    >Edit</button>
                                <button className="custom-btn-2 btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table> 
            </div> 
            <button className="custom-btn-3 mt-4" style={{maxWidth: "200px"}} onClick={() => setShowModal(true)}>Add New Product</button>

            {/*Modal*/}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: showModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Product</h5>
                            <button type="button" className="close" onClick={() => {setShowModal(false); setEditId(null); setNewProduct({ name: '', price: '', stock: '', desc: '', img: null });}}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" className="form-control" name="name" value={newProduct.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" className="form-control" name="price" value={newProduct.price} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Stock</label>
                                    <input type="number" className="form-control" name="quantity" value={newProduct.quantity} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" className="form-control" name="description" value={newProduct.description} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    {editId ? 
                                        <input type="file" className="form-control" name="img" onChange={handleChange} accept="image/*" /> :
                                        <input type="file" className="form-control" name="img" onChange={handleChange} accept="image/*" required />
                                    }
                                    <img src={newProduct.img} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="custom-btn-2 btn-sm btn-danger" onClick={() => { setShowModal(false); setEditId(null); setNewProduct({ name: '', price: '', stock: '', desc: '', img: null });}}>Close</button>
                                <button type="submit" className="custom-btn-1 btn-sm btn-info mr-2">{editId ? "Update Product" : "Add Product"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*End Modal*/}
        </>
    )
}

export default ProductAdmin;