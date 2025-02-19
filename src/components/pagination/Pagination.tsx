"use client";

import { FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type PaginationProps = {
    count: number;
};

const Pagination: FC<PaginationProps> = ({ count }) => {
    const searchParams = useSearchParams();
    console.log(searchParams)
    const pathname = usePathname();
    console.log(pathname)
    const router = useRouter();
    console.log(router)

    // Получаем текущие значения page и skip
    const page = Number(searchParams.get("page")) || 1;
    const skip = Number(searchParams.get("skip")) || 0;

    // Функция для обновления URL с новыми параметрами
    const updateQuery = (newPage: number, newSkip: number) => {
        const params = new URLSearchParams(searchParams.toString()); // Копируем текущие параметры
        params.set("page", newPage.toString());
        params.set("skip", newSkip.toString());

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const prev = () => {
        if (page > 1) {
            updateQuery(page - 1, skip - 20);
        }
    };

    const next = () => {
        updateQuery(page + 1, skip + 20);
    };

    return (
        <div>
            <button disabled={page === 1} onClick={prev}>Prev</button>
            <button disabled={count < 20} onClick={next}>Next</button>
        </div>
    );
};

export default Pagination;
