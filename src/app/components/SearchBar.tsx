export default function SearchBar(props) {
  return (
    <div className=" text-gray-700 ">
      <input
        type="text"
        placeholder="Search"
        value={props.searchProp}
        onChange={props.onSearchValueChange}
      />
    </div>
  );
}
