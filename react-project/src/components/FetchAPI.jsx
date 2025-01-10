import React, { useState, useEffect } from "react";
import "./FetchAPI.css";

function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [visibleProducts, setVisibleProducts] = useState(4);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data); // Update products state
            } catch (err) {
                setError(err.message); // Update error state
            } finally {
                setLoading(false); // Disable loading spinner
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (productTitle) => {
        alert(`Added "${productTitle}" to your cart!`);
    };

    const loadMoreProducts = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
    };

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div className="product-grid">
                {products.slice(0, visibleProducts).map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <p className="category">Category: {product.category}</p>
                        <p className="rating">
                            Rating: {product.rating.rate} ({product.rating.count} reviews)
                        </p>
                        <button onClick={() => addToCart(product.title)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            {visibleProducts < products.length && (
                <button className="load-more" onClick={loadMoreProducts}>
                    Load More
                </button>
            )}
        </div>
    );
}

export default ProductGrid;
