import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import fruitCart from  '../assets/veg cart.png';

const RevisedFetch = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRequest = async () => {
        try {
            const req = await fetch('https://jazzy-mern.onrender.com/api/products');
            const res = await req.json();
            setProducts(res.products);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    return (
        <main className="container text-center">
            {isLoading && <Spinner animation="border" />}
            <section className="container">
                <div className="row">
                    {products.map((product, index) => (
                        <div key={product._id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={product.image} alt="" className="card-img-top" style={{ width: '100%' }} />
                                <div className="card-body" style={{ paddingLeft: '15px' }}>
                                    <h5 className="card-title" style={{ fontSize: '0.8rem', textAlign: 'left', marginBottom: '0' }}>{product.title}</h5>
                                    <p className="card-text" style={{ fontSize: '0.8rem', textAlign: 'left', marginBottom: '5px' }}>Price: ₦{product.price}</p>
                                    <img src={fruitCart} alt="External" style={{ width: '100%', maxWidth: '200px' }} />
                                    <button className='btn btn-danger'> + Add To Cart</button>
                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default RevisedFetch;