import { useState, useMemo } from "react";
import clsx from "clsx";

export interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T;
    sortable?: boolean;
}

export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    loading?: boolean;
    selectable?: boolean;
    onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T>({
    data,
    columns,
    loading = false,
    selectable = false,
    onRowSelect,
}: DataTableProps<T>) {
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: "asc" | "desc";
    } | null>(null);

    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());


    const sortedData = useMemo(() => {
        if (!sortConfig) return data;
        return [...data].sort((a, b) => {
            const aVal = a[sortConfig.key as keyof T];
            const bVal = b[sortConfig.key as keyof T];

            if (aVal! < bVal!) return sortConfig.direction === "asc" ? -1 : 1;
            if (aVal! > bVal!) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);


    const handleSort = (col: Column<T>) => {
        if (!col.sortable) return;
        setSortConfig((prev) =>
            prev && prev.key === String(col.dataIndex) && prev.direction === "asc"
                ? { key: String(col.dataIndex), direction: "desc" }
                : { key: String(col.dataIndex), direction: "asc" }
        );
    };


    const toggleRow = (index: number) => {
        const updated = new Set(selectedRows);
        if (updated.has(index)) {
            updated.delete(index);
        } else {
            updated.add(index);
        }
        setSelectedRows(updated);
        if (onRowSelect) {
            onRowSelect(Array.from(updated).map((i) => sortedData[i]));
        }
    };


    if (loading) {
        return <div className="p-4 text-center dark:text-gray-300">Loading...</div>;
    }


    if (sortedData.length === 0) {
        return <div className="p-4 text-center text-gray-500 dark:text-gray-400">No data available</div>;
    }

    return (
        <table className="w-full border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                    {selectable && <th className="p-2 text-left dark:text-gray-200">Select</th>}
                    {columns.map((col) => (
                        <th
                            key={col.key}
                            onClick={() => handleSort(col)}
                            className={clsx(
                                "p-2 text-left dark:text-gray-200",
                                col.sortable && "cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                            )}
                        >
                            {col.title}
                            {sortConfig?.key === String(col.dataIndex) &&
                                (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, i) => (
                    <tr key={i} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        {selectable && (
                            <td className="p-2">
                                <input
                                    type="checkbox"
                                    checked={selectedRows.has(i)}
                                    onChange={() => toggleRow(i)}
                                    className="dark:bg-gray-700 dark:border-gray-600"
                                />
                            </td>
                        )}
                        {columns.map((col) => (
                            <td key={col.key} className="p-2 dark:text-gray-200">
                                {String(row[col.dataIndex])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
