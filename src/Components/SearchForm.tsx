import React from "react";

interface SearchFormProps {
  searchLocation: string;
  setSearchLocation: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchLocation,
  setSearchLocation,
  handleSearch,
}) => {
  return (
    <>
      <section>
        <form>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchLocation}
              onChange={(e) => {
                setSearchLocation(e.target.value);
              }}
            />
            <button
              onClick={handleSearch}
              className="search-button"
              type="button"
            >
              GET
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchForm;
