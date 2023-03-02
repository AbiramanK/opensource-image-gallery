interface ImageUrlsInterface {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface ImageLinksInterface {
  self: string;
  html: string;
  download?: string;
  download_location?: string;
  photos?: string;
  related?: string;
}

interface ImageAuthorLinksInterface {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ImageAuthorProfileImageInterface {
  small: string;
  medium: string;
  large: string;
}

interface ImageAuthorSocialInterface {
  instagram_username: string | null;
  portfolio_url: string | null;
  twitter_username: string | null;
  paypal_email: string | null;
}

interface ImageAuthorInterface {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string | null;
  last_name: string | null;
  twitter_username: string | null;
  portfolio_url: string | null;
  bio: string | null;
  location: string | null;
  links: ImageAuthorLinksInterface;
  profile_image: ImageAuthorProfileImageInterface;
  instagram_username: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: ImageAuthorSocialInterface;
}

interface ImageCurrentUserCollection {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: null;
  user: null;
}

export interface ImageInterface {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: ImageUrlsInterface;
  links: ImageLinksInterface;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: ImageCurrentUserCollection[];
  sponsorship?: any | null;
  topic_submissions: any | {};
  user: ImageAuthorInterface;
  premium?: boolean;
}

interface ImageTagSourceAncestryTypeInterface {
  slug: string;
  pretty_slug: string;
}

interface ImageTagSourceAncestryInterface {
  type?: ImageTagSourceAncestryTypeInterface;
  category?: ImageTagSourceAncestryTypeInterface;
  subcategory?: ImageTagSourceAncestryTypeInterface;
}

interface ImageTagSourceInterface {
  ancestry: ImageTagSourceAncestryInterface;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_photo: ImageInterface;
}

interface ImageTagInterface {
  type: string;
  title: string;
  source?: ImageTagSourceInterface;
}

interface PreviewPhotoInterface {
  id: string | null;
  created_at: string | null;
  updated_at: string | null;
  blur_hash: string | null;
  urls: ImageUrlsInterface;
}

interface ImageResultInterface extends ImageInterface {
  tags: ImageTagInterface[];
}

export interface SearchImageResultInterface {
  total: number;
  total_pages: number;
  results: ImageResultInterface[];
}

interface ExifInterface {
  make: string | null;
  model: string | null;
  name: string | null;
  exposure_time: string | null;
  aperture: string | null;
  focal_length: string | null;
  iso: number | null;
}

interface LocationPositionInterface {
  latitude: number | string | null;
  longitude: number | string | null;
}
interface LocationInterface {
  name: null;
  city: null;
  country: null;
  position: LocationPositionInterface;
}

interface MetaInterface {
  index: boolean;
}

interface RelatedCollectionsResultInterface {
  id: string | null;
  title: string | null;
  description: string | null;
  published_at: string | null;
  last_collected_at: string | null;
  updated_at: string | null;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string | null;
  tags: ImageTagInterface[];
  links: ImageLinksInterface;
  user: ImageAuthorInterface;
  cover_photo: ImageInterface;
  preview_photos: PreviewPhotoInterface[];
}

interface RelatedCollectionsInterface {
  total: number;
  type: string;
  results: RelatedCollectionsResultInterface[];
}

export interface ImageByIdResultInterface extends ImageInterface {
  exif: ExifInterface;
  location: LocationInterface;
  meta: MetaInterface;
  public_domain: boolean;
  tags: ImageTagInterface[];
  tags_preview: ImageTagInterface[];
  views: number;
  downloads: number;
  topics: Array<any>;
  related_collections: RelatedCollectionsInterface;
}

export interface FetchErrorInterface {
  status: number;
}

export interface FetchPhotoByIdResponse {
  error: FetchErrorInterface | null;
  data: ImageByIdResultInterface | null;
}

export interface FetchPhotosByQueryResponse {
  error: FetchErrorInterface | null;
  data: SearchImageResultInterface | null;
}

export interface FetchPhotosListResponse {
  error: FetchErrorInterface | null;
  data: ImageInterface[] | null;
}
