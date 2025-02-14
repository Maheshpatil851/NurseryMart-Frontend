import Button from "./Button";

const TablePagination = ({ currentPage, totalPages, setPage }) => {
    console.log("pagination",currentPage)
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPage(newPage);
      }
    };
  
    return (
      <div className="flex justify-center items-center mt-4">
        <Button onClick={() => handlePageChange(1)} disabled={currentPage == 1}>
          First
        </Button>
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage == 1}>
          Prev
        </Button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage == totalPages}>
          Next
        </Button>
        <Button onClick={() => handlePageChange(totalPages)} disabled={currentPage == totalPages}>
          Last
        </Button>
      </div>
    );
  };
  
  export default TablePagination;
  