type Props = { searchProp: string | number; onSearchValueChange: any };

export default function SearchBar({ searchProp, onSearchValueChange }: Props) {
  //logs to see what the props that are passed in look like on the browser console. Remember any component nested within a client component becomes a client component
  //   console.log("search prop", searchProp);
  //   console.log("onSearchValueChange", onSearchValueChange);
  return (
    <div className=" text-white py-2 ">
      <input
        type="text"
        placeholder="   Search"
        value={searchProp}
        onChange={onSearchValueChange}
        className="border-2 border-gray-200 rounded-3xl bg-transparent"
      />
    </div>
  );
}
