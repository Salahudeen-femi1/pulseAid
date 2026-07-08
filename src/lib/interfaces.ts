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
  role: string | string[];
  children?: NavChildItem[];
}
