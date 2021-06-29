import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import styled from 'styled-components';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {

    render() {
        return (
          <React.Fragment>
              <ProductWrapper className={"py-5"}>
    {/* container will give left & right space */}
                  <div className={"container"}>
                  
                        <Title name="Our" title="Menu" />
    {/* important: Must include bootstrap row if not the col grid can't work*/}
                        <div className={"row"}>
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>

              </ProductWrapper>
          </React.Fragment>
        )
    }
}

const ProductWrapper = styled.section`
`