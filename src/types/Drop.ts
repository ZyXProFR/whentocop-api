export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  small: Small;
  thumbnail: Thumbnail;
}

export interface MainImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  created_at: Date;
  updated_at: Date;
}

export interface BrandCategory {
  id: number;
  Brand_category_name: string;
  created_at: Date;
  updated_at: Date;
  slug: string;
}

export interface AggregData {
  id: number;
  drop_id: number;
  thumbs_up_count: number;
  thumbs_down_count: number;
  created_by?: any;
  updated_by?: any;
  created_at: Date;
  updated_at: Date;
}

export interface Drop {
  id: number;
  resell_index: string;
  model_name: string;
  brand_name: string;
  resell_price: string;
  name_color: string;
  slug: string;
  best_price: number;
  drop_date: Date;
  drop_hour: string;
  style_code: string;
  style_code_list: string;
  know_drop_date: boolean;
  drop_date_false: Date;
  main_image: MainImage;
  brand_categories: BrandCategory[];
  aggreg_data: AggregData;
}
