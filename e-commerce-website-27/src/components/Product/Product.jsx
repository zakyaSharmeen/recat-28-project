

import React from 'react';
import { Link } from 'react-router-dom';

function Product({ products }) {

  return (
    <section className="text-gray-400 bg-gray-900 body-font m-2">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
 
          {products.map((pdata, index) => {
            const { id, category, description, image, price, title } = pdata;
            return (
              <Link to={`/products/${id}`} key={index}>
                <div className="border border-opacity-5 p-4 rounded-lg hover:shadow-lg">
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={image}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-white title-font text-lg font-medium">{title}</h2>
                    <p className="mt-1 text-indigo-400">${price}</p>
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Product;
