import React from 'react';
import { Provider } from 'react-redux';


const Root = ({store}) => (
  <Provider store={store} >
    <section>
      Stock App!
    </section>
  </Provider>
);

export default Root;
