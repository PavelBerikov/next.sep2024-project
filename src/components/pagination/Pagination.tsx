"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";

type PaginationProps = {
    count: number;
    currentPage: number;
};
const Pagination: FC<PaginationProps> = ({ count, currentPage }) => {
    const router = useRouter();
    const updateQuery = (newPage: number) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`, { scroll: false });
    };
    const prev = () => {
        if (currentPage > 1) {
            updateQuery(currentPage - 1);
        }
    };
    const next = () => {
        updateQuery(currentPage + 1);
    };
    return (
        <div>
            <button disabled={currentPage === 1} onClick={prev}>
                Prev
            </button>
            <button disabled={count < 20} onClick={next}>
                Next
            </button>
        </div>
    );
};
export default Pagination;
