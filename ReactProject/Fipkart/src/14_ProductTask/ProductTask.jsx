import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";

const ProductTask = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]); // Added simple cart

  // Fetch products
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }

    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`); // Simple feedback for newbie
  };

  return (
    <>
      <div className={styles.header}>
        <h1>My Shop 🛒</h1>
        <p>Items in cart: {cart.length}</p>
      </div>

      <div className={styles.container}>
        {products.map((product) => (
          <div key={product.id} onClick={() => setSelectedProduct(product)}>
            <Card product={product} />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedProduct(null)}
            >
              ❌
            </button>

            <div className={styles.left}>
              <img
                src={selectedProduct.images?.[0] || selectedProduct.thumbnail}
                alt={selectedProduct.title}
              />
            </div>

            <div className={styles.right}>
              <h1 className={styles.popupTitle}>{selectedProduct.title}</h1>
              <p className={styles.popupCategory}>{selectedProduct.category}</p>

              <h2 className={styles.popupPrice}>${selectedProduct.price}</h2>

              <p className={styles.popupDescription}>
                {selectedProduct.description}
              </p>

              <div className={styles.colors}>
                <div className={styles.black}></div>
                <div className={styles.red}></div>
              </div>

              <button
                className={styles.popupButton}
                onClick={() => addToCart(selectedProduct)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTask;
