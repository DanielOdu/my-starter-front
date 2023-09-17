type Props = {
  items: any[];
  onCategoryBtnClick: any;
  selectedCategories: any;
  categories: string[];
};

export default function FilterBar({
  items,
  onCategoryBtnClick,
  selectedCategories,
  categories,
}: Props) {
  // const productItems = items;

  //logs to see what the props that are passed in look like on the browser console. Remember any component nested within a client component becomes a client component
  // console.log(
  //   "(FilterBar.tsx) productItems passed into FilterBar",
  //   productItems
  // );
  // console.log(
  //   "(FilterBar.tsx) categories passed into FilterBar",
  //   categories
  // );

  //INSERT CODE HERE
  return (
    <div className=" text-white flex space-x-3 pb-2">
      {/* {productItems &&
        productItems.map((productItem, idx) => {
          return <p>{productItem.category}</p>;
        })} */}
      {categories &&
        categories.map((category, idx) => {
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
