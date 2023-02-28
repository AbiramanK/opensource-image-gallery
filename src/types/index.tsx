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
  download: string;
  download_location: string;
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
  promoted_at: string;
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
  current_user_collections: Array<any>;
  sponsorship?: any | null;
  topic_submissions: any | {};
  user: ImageAuthorInterface;
}
