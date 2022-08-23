# DO-Product-Card

This is a test package to deploy in NPM

### Josue Lara

## Example

```
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "do-product-card";
```

```
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
