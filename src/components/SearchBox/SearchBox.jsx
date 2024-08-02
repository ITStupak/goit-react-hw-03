import css from "./SearchBox.module.css";

export default function SearchBox({ searchValue, handleSearch }) {
  return (
    <div className={css.search}>
      <label className={css["search-label"]} htmlFor="search">
        Find contacts by name:
      </label>
      <input
        className={css["search-input"]}
        type="text"
        id="search"
        placeholder="Enter your characters..."
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
}
