//* libraries
import React from 'react';
import renderer from 'react-test-renderer';
//* components
import { ProductTitle, ProductCard } from '../../src/components';
//* data
import { product1 } from '../data/products';

describe('Test in ProductTitle', () => {
  test('should render component with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
