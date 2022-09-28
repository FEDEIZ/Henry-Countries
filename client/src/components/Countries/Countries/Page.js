import React from "react";

export function Page({ handlePageChange, actualPage, totalPages }) {
  return (
    <div>
      <button onClick={handlePageChange} value={"FIRST"} disabled={!actualPage}>
        {"<<"}
      </button>
      <button
        onClick={handlePageChange}
        value={"LAST"}
        disabled={actualPage - 1 < 0}
      >
        {"<"}
      </button>
      <button
        onClick={handlePageChange}
        value={"NEXT"}
        disabled={actualPage + 1 > totalPages}
      >
        {">"}
      </button>
      <button
        onClick={handlePageChange}
        value={"FINAL"}
        disabled={actualPage === totalPages}
      >
        {">>"}
      </button>
    </div>
  );
}

export default Page;
