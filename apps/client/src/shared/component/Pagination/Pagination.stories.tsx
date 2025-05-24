import type { Meta } from "@storybook/react";
import { type ComponentProps, useState } from "react";
import Pagination from ".";

const meta: Meta<typeof Pagination> = {
  title: "Shared/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    totalPages: {
      control: { type: "number" },
    },
    currentPage: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Pagination>;
export default meta;

export const Default = {
  args: {
    totalPages: 10,
    currentPage: 1,
  },
  render: (args: ComponentProps<typeof Pagination>) => {
    const [page, setPage] = useState(args.currentPage);

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
    };

    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    );
  },
};

export const Small = {
  args: {
    totalPages: 5,
    currentPage: 1,
  },
  render: (args: ComponentProps<typeof Pagination>) => {
    const [page, setPage] = useState(args.currentPage);

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
    };

    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    );
  },
};

export const Large = {
  args: {
    totalPages: 20,
    currentPage: 1,
  },
  render: (args: ComponentProps<typeof Pagination>) => {
    const [page, setPage] = useState(args.currentPage);

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
    };

    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    );
  },
};

export const MidPageStart = {
  args: {
    totalPages: 10,
    currentPage: 5,
  },
  render: (args: ComponentProps<typeof Pagination>) => {
    const [page, setPage] = useState(args.currentPage);

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
    };

    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    );
  },
};

export const LastPageStart = {
  args: {
    totalPages: 10,
    currentPage: 10,
  },
  render: (args: ComponentProps<typeof Pagination>) => {
    const [page, setPage] = useState(args.currentPage);

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
    };

    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    );
  },
};
