import './Pagination.css';

const Pagination = ({ setPage, page }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Назад</button>
      <span>Страница {page}</span>
      <button onClick={() => setPage((prev) => prev + 1)}>Вперёд</button>
    </div>
  );
};

export default Pagination;
