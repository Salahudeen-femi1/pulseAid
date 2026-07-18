import type { IconType } from "react-icons";

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

export interface NavChildItem {
  name: string;
  icon: IconType;
  path: string;
}

export interface NavItem {
  name: string;
  icon: IconType;
  path?: string;
  // role: string | string[];
  children?: NavChildItem[];
}

export interface TableColumnProps<T = unknown> {
  label: string | React.ReactNode;
  key?: string;
  render?: (item: T, index: number) => React.ReactNode;
  className?: string;
  tableHeadingClassName?: string;
}

export interface ReusableTableProps<
  T extends { id?: number | string },
> extends PaginationControlProps {
  columns: TableColumnProps<T>[];
  isLoading: boolean;
  data: T[];
  error: unknown;
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  isDeleting?: boolean;
  hasSerialNo?: boolean;
  tableType?: string;
  selectable?: boolean;
  selectedRowIds?: Array<number | string>;
  onToggleRowSelection?: (id: number | string) => void;
  onToggleAllRows?: (checked: boolean) => void;
  getRowId?: (item: T, index: number) => number | string | undefined;
}

export interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  tableType?: string;
}

export interface Donor {
    id:number;
    name:string;
    bloodGroup:
        | "A+"
        | "A-"
        | "B+"
        | "B-"
        | "AB+"
        | "AB-"
        | "O+"
        | "O-";
    avatar:string;
    available:boolean;
    distance:number;
    location:string;
    bio:string;

}

export interface Filters {
    bloodGroup:string | null;
    radius:number;
    available:boolean;
}



