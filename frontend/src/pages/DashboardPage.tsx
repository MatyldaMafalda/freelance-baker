import React from "react";
import { useGetCakesQuery } from "store";

export const DashboardPage: React.VFC = () => {
    const { data, isLoading: isQueryLoading, isFetching } = useGetCakesQuery();

    //const isLoading = isQueryLoading || isDeleteLoading || isFetching;
    console.log(data);
    return (
        <>
            <div>Freelance Baker</div>
        </>
    );
};
