import React from "react";
import style from "./page.module.css";

export function Page({ handlePageChange, actualPage, totalPages }) {
  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button
          onClick={handlePageChange}
          value={"FIRST"}
          disabled={!actualPage}
        >
          {"<<"}
        </button>
      </div>
      <div>
        <button
          onClick={handlePageChange}
          value={"LAST"}
          disabled={actualPage - 1 < 0}
        >
          {"<"}
        </button>
      </div>
      <div>
        <button
          onClick={handlePageChange}
          value={"NEXT"}
          disabled={actualPage + 1 > totalPages}
        >
          {">"}
        </button>
      </div>
      <div>
        <button
          onClick={handlePageChange}
          value={"FINAL"}
          disabled={actualPage === totalPages}
        >
          {">>"}
        </button>
      </div>
      <div className={style.actualPage}>{actualPage}</div>
    </div>
  );
}

export default Page;
