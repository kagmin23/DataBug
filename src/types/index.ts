export type WebType = "normal" | "shopee" | "tiki";

export interface ScrapedData {
  id: string;
  url: string;
  webType: WebType;
  title: string;
  description: string;
  price?: string;
  rating?: number;
  timestamp: string;
  status: 'success' | 'pending' | 'error';
}

export interface FetchFormProps {
  onFetch: (url: string, webType: WebType) => void;
  isLoading: boolean;
}

export interface DataListProps {
  data: ScrapedData[];
  onClear: () => void;
  isLoading: boolean;
}

export interface DataCardProps {
  item: ScrapedData;
}