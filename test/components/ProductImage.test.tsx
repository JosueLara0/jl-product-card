//* libraries
import React from 'react';
import renderer from 'react-test-renderer';
//* components
import { ProductImage, ProductCard } from '../../src/components';
//* data
import { product2 } from '../data/products';

describe('Tests in ProductImage component', () => {
  test('should render component with the custom img', () => {
    const wrapper = renderer.create(<ProductImage img="./coffe-mug.png" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render component with the product img', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
