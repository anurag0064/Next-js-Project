import { IoSearchOutline } from "react-icons/io5";

const DefaultInput = () => {
  return (
    <div>
      <label htmlFor="default-search" className="text-sm font-medium sr-only text-[#afbabf]">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
          <IoSearchOutline className="text-xl text-[#afbabf]" />
        </div>
        <input
          type="search"
          className="border text-black outline-none h-10 block w-full pl-10 pr-3 text-sm rounded-lg
          focus:ring-0 ring-0"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
export default DefaultInput;


