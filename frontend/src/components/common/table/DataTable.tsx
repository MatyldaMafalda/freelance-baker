import React from "react";
import Table from "rc-table";
import { getColumns, addDataKeys } from "components/common/table/table-helper";
import styled from "styled-components";
import { themeColor } from "styles/styleUtils";
import { getIcon } from "components/icons/Icons";

const TableStyled = styled(Table)`
    table {
        background-color: ${themeColor("white")};
        border-collapse: collapse;
        width: 100%;

        thead {
            margin-bottom: 0.5rem;

            tr {
                border-bottom: 2px solid ${themeColor("primary")};

                th:first-of-type {
                    text-align: left;
                    padding-left: unset;
                }

                th {
                    width: calc(100% / ${(props) => props.columns?.length});
                    padding: 1rem;
                }
            }
        }

        tbody {
            tr {
                border-bottom: 1px solid ${themeColor("primaryLight")};

                td {
                    vertical-align: middle;
                    text-align: center;
                    padding: 0.5rem;
                }

                td:first-of-type {
                    text-align: left;
                }
            }
        }
    }
`;

const TableHeader = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 1rem;
`;

interface TableProps<Type> {
    title: string;
    data: Type[];
    tableOperations: any;
    iconName: string;
}
export const DataTable = <T extends { id: string | number }>({
    title,
    data,
    tableOperations,
    iconName,
}: TableProps<T>) => {
    const columns = getColumns(data, tableOperations);
    const tableData = addDataKeys(data);

    return (
        <>
            <TableHeader>
                <span>{getIcon(iconName, { size: "2rem" })}</span>
                <h2>{title}</h2>
            </TableHeader>
            <TableStyled columns={columns} data={tableData} />
        </>
    );
};
