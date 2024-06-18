import { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center m-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search images..."
          className="px-4 py-2 border border-gray-500 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
