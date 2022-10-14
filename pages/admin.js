import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [priceInput, setPriceInput] = useState();

  const [nameOnEditInput, setNameOnEditInput] = useState('');
  const [priceOnEditInput, setPriceOnEditInput] = useState();
  const [onEditId, setOnEditId] = useState();

  async function getProductsFromApi() {
    const response = await fetch('/api/products');
    const productsFromApi = await response.json();

    setProducts(productsFromApi);
  }
  async function createProductFromApi() {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInput,
        price: priceInput,
      }),
    });
    const productFromApi = await response.json();

    // TODO handle the error when animal from api is undefined
    // you can check if animalFromApi contains an error and display the error in the front end

    const newState = [...products, productFromApi];

    setProducts(newState);
  }

  async function deleteProductFromApiById(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    const deletedProduct = await response.json();

    const filteredProducts = products.filter((product) => {
      return product.id !== deletedProduct.id;
    });

    setProducts(filteredProducts);
  }

  async function updateProductFromApiById(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: nameOnEditInput,
        price: priceOnEditInput,
      }),
    });
    const updatedProductFromApi = await response.json();

    // TODO handle the error when animal from api is undefined
    // you can check if animalFromApi contains an error and display the error in the front end

    const newState = products.map((product) => {
      if (product.id === updatedProductFromApi.id) {
        return updatedProductFromApi;
      } else {
        return product;
      }
    });

    setProducts(newState);
  }

  useEffect(() => {
    getProductsFromApi().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <section className="main-section">
      <div>
        <h1>Product Management</h1>
        <div className="row-of-inputs-wrap">
          <label>
            Product name
            <br />
            <input
              value={nameInput}
              onChange={(event) => {
                setNameInput(event.currentTarget.value);
              }}
            />
          </label>
          <br />
          <br />
          <label>
            Price
            <br />
            <input
              value={priceInput}
              onChange={(event) => {
                setPriceInput(event.currentTarget.value);
              }}
            />
          </label>

          <button
            className="main-button"
            onClick={async () => {
              await createProductFromApi();
            }}
          >
            Create Product
          </button>
        </div>
        <hr />
        <div id="product-management-list">
          {products.map((product) => {
            const isProductOnEdit = onEditId === product.id;

            return (
              <div className="row-of-inputs-wrap algin-left" key={product.id}>
                <input
                  id="product-name-in-list"
                  value={isProductOnEdit ? nameOnEditInput : product.name}
                  disabled={!isProductOnEdit}
                  onChange={(event) => {
                    setNameOnEditInput(event.currentTarget.value);
                  }}
                />
                <input
                  value={
                    isProductOnEdit ? priceOnEditInput : product.price || ''
                  }
                  disabled={!isProductOnEdit}
                  onChange={(event) => {
                    setPriceOnEditInput(event.currentTarget.value);
                  }}
                />

                <button
                  className="main-button secondary-button"
                  onClick={() => deleteProductFromApiById(product.id)}
                >
                  <img src="/trash.png" alt="" className="icon" />
                </button>
                {!isProductOnEdit ? (
                  <button
                    className="main-button"
                    onClick={() => {
                      setOnEditId(product.id);
                      setNameOnEditInput(product.firstName);
                      setPriceOnEditInput(product.accessory || '');
                    }}
                  >
                    edit
                  </button>
                ) : (
                  <button
                    className="main-button secondary-button"
                    onClick={async () => {
                      setOnEditId(undefined);
                      await updateProductFromApiById(product.id);
                    }}
                  >
                    save
                  </button>
                )}
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
