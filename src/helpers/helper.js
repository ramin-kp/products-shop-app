const shortenTitle = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};
const searchProducts = (products, search) => {
  if (!search) return products;
  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return filterProducts;
};
const filterProducts = (products, category) => {
  if (!category) return products;
  const categoryProducts = products.filter((product) =>
    product.category.includes(category)
  );
  return categoryProducts;
};
const createQueryObject = (currentQuery, query) => {
  if (query.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (query.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return {
    ...currentQuery,
    ...query,
  };
};
const searchQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};
export {
  shortenTitle,
  searchProducts,
  filterProducts,
  createQueryObject,
  searchQuery,
};
