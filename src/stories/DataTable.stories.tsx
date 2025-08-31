import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test"
import { DataTable, type Column } from "../components/DataTable";


type User = {
    id: number;
    name: string;
    age: number;
};

const sampleData: User[] = [
    { id: 1, name: "Lakshya", age: 22 },
    { id: 2, name: "Aditi", age: 25 },
    { id: 3, name: "Ravi", age: 28 },
];

const columns: Column<User>[] = [
    { key: "id", title: "ID", dataIndex: "id", sortable: true },
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const meta: Meta<typeof DataTable<User>> = {
    title: "Components/DataTable",
    component: DataTable<User>,
    tags: ["autodocs"],
    args: {
        onRowSelect: fn()
    }
};

export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
    args: {
        data: sampleData,
        columns,
    },
};

export const Sortable: Story = {
    args: {
        data: sampleData,
        columns,
    },
};

export const Selectable: Story = {
    args: {
        data: sampleData,
        columns,
        selectable: true,
    },
};

export const Loading: Story = {
    args: {
        data: [],
        columns,
        loading: true,
    },
};

export const Empty: Story = {
    args: {
        data: [],
        columns,
    },
};
