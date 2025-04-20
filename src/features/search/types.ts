type FilterItem = {
  label: string;
  value: string;
};

type SearchFilter = {
  id: number;
  label: string;
  items: FilterItem[];
};

export type SearchFiltersProps = {
  filters: SearchFilter[];
};
