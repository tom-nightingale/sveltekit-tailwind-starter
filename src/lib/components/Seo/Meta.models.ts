export interface MetaModel {
  title?: string;
  description?: string;
  keywords?: (string | null | undefined)[] | undefined;
  shareGraphic?: {
    url?: string | null | undefined;
    alt?: string;
  };
  ogType?: string;
}
