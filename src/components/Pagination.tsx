import React from "react";
import { Itask } from "../types";

interface IPagination {
  tasks: Itask[];
  handlePage: (page: any) => void;
  isPreviousData: boolean;
  page: number;
}
const Pagination = ({
  page,
  tasks,
  handlePage,
  isPreviousData,
}: IPagination) => {
  const hasNext = tasks?.length == 2;
  const handlePreviousButton = () => {
    handlePage((old: number) => Math.max(old - 1, 0));
  };
  const handleNextButton = () => {
    if (!isPreviousData && hasNext) {
      handlePage((old: number) => old + 1);
    }
  };
  return (
    <>
      <span>Strona: {page}</span>
      <button onClick={handlePreviousButton} disabled={page === 1}>
        Poprzenia strona
      </button>
      <button onClick={handleNextButton} disabled={isPreviousData || !hasNext}>
        Następna strona
      </button>
    </>
  );
};

export default Pagination;
