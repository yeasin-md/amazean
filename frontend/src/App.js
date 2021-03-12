import React from 'react';
import data from './data';

function App() {
  return (
    <>
      <div className="grid-container">
        {/* <!-- nav part starts --> */}
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazean
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        {/* {/* <!-- nav part ends --> */}
        {/* <!--main part starts--> */}
        <main>
          <div>
            <div className="row center">
              {data.products.map(product => (
                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    <img
                      className="medium"
                      style={{ height: '300px', width: '290px' }}
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                  <div className="card-body">
                    <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="price">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        {/* <!--main part ends--> */}
        {/* <!--footer starts--> */}
        <footer className="row center">All rights reserved - Yeasin</footer>
        {/* <!--footer part ends--> */}
      </div>
    </>
  );
}

export default App;
