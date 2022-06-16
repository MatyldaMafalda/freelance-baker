import { ReactNode } from "react";

interface OperationProps {
    key: string;
    render: (rowData: any) => ReactNode;
}

export const getColumns = (data: any, operations?: OperationProps[]) => {
    const filteredFields = Object.keys(data[0]).filter((dataKey) => dataKey !== "id");
    const columns = filteredFields.map((key) => {
        const title = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
        return {
            title: title,
            dataIndex: key,
            key: key,
            width: 100,
        };
    });
    if (operations) return [...columns, ...operations];
    return columns;
};

export function addDataKeys<Type extends { id: string | number }>(data: Type[]) {
    const dataWithKey = data.map((dataItem: Type) => ({
        ...dataItem,
        key: dataItem.id,
    }));
    return dataWithKey;
}
