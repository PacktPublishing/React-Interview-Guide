{
  products.map((product) => {
    const revenue = useMemo(() => calculateRevenue(product), [product]);

    return (
      <>
        <span>Product: {product.name}</span>
        <span>Revenue: {revenue}</span>
      </>
    );
  });
}
