type Props = {
  items: any[];
  onCategoryBtnClick: any;
  selectedCategories: any;
};

export default function FilterBar({
  items,
  onCategoryBtnClick,
  selectedCategories,
}: Props) {
  const productItems = items;
  //logs to see what the props that are passed in look like on the browser console. Remember any component nested within a client component becomes a client component
  //   console.log("filterbar items", productItems);

  //in order to create a 'set' which will give you a unique set of values from an array you can use the Set method. in this example, mulitple items have the same category but only the unique categories are returned
  const uniqueCategories = new Set(
    productItems.map((productItem) => productItem.category)
  );
  //   console.log("unique categories", uniqueCategories);

  //The unique categories set then needs to be converted into an array before it can be mapped over. This can be done using the spread operator or by using 'Array.from()'
  // Spread operator
  //   const uniqueCategoriesArray = [...uniqueCategories];
  //   console.log("uniqueCategoriesArray", uniqueCategoriesArray);

  //Array.from()
  const uniqueCategoriesArray = Array.from(uniqueCategories);
  //   console.log("uniqueCategoriesArray", uniqueCategoriesArray);

  //INSERT CODE HERE
  return (
    <div className=" text-white flex space-x-3 pb-2">
      {/* {productItems &&
        productItems.map((productItem, idx) => {
          return <p>{productItem.category}</p>;
        })} */}
      {uniqueCategoriesArray &&
        uniqueCategoriesArray.map((category, idx) => {
          return (
            //* When passing a function that takes parameters as a prop, use this notation <<
            <div key={`categories-${idx}`}>
              <button
                onClick={() => onCategoryBtnClick(category)}
                className={`${
                  selectedCategories?.includes(category)
                    ? "activeCategory"
                    : "inactiveCategory"
                } `}
              >
                {category}
              </button>
            </div>
          );
        })}
    </div>
  );
}
