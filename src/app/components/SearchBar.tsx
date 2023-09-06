type Props = { searchProp: string | number; onSearchValueChange: any };

export default function SearchBar({ searchProp, onSearchValueChange }: Props) {
  //logs to see what the props that are passed in look like on the browser console. Remember any component nested within a client component becomes a client component
  //   console.log("search prop", searchProp);
  //   console.log("onSearchValueChange", onSearchValueChange);
  return (
    <div className=" text-gray-700 ">
      <input
        type="text"
        placeholder="Search"
        value={searchProp}
        onChange={onSearchValueChange}
      />
    </div>
  );
}
