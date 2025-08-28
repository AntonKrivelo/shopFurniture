import './SearchForm.css';

const SearchForm = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search__form-container">
      <form className="search__form" onSubmit={(e) => e.preventDefault()}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search__panel"
          placeholder="Поиск по названию..."
        />
      </form>
    </div>
  );
};

export default SearchForm;
