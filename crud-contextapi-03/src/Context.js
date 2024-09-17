import React, { useState } from 'react';
import { rowData } from './appData';

// Create the context
const ProductContext = React.createContext();

function ProductProvider(props) {
  // Use useState hook to manage state in functional components
  const [alldata, setAlldata] = useState(rowData);

  console.log(alldata);

  return (
    <ProductContext.Provider value={alldata}>
      {props.children} {/* Access children from props */}
    </ProductContext.Provider>
  );
}

// No need to invoke ProductContext.Consumer as a function
const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
