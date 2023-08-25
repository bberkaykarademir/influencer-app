export interface InstaSharedPost {
  img: string;
  likes: number;
  comments: number;
}

interface InstaProfile {
  last_scrape: Date;
  id: string;
  access_token: string;
  username: string;
  full_name: string;
  biography: string;
  profile_pic: string;
  followers: number;
  following: number;
  post_number: number;
  average_like: number;
  shared_posts: InstaSharedPost[];
  keywords: string[];
}

interface TiktokProfile {
  tiktok_last_scrape: Date;
  tiktok_average_like: number;
  tiktok_engagement_rate: number;
  tiktok_access_token: string;
  tiktok_refresh_token: string;
  open_id: string;
  refresh_expires_in: string;
  log_id: string;
  union_id: string;
  username: string;
  last_scrape: Date;
  followers: number;
  following: number;
  hearts: number;
  country: string;
  videos: any[];
  profile_pic: string;
  createTime: Date;
  privateAccount: boolean;
  verified: boolean;
  secret: boolean;
  tiktok_nickname: string;
  bio_description: string;
}

interface MoneyInfo {
  paparaAccountNo: number;
  current: number;
  currency: string;
  exchanges: any[];
  city: string;
  county: string;
  name: string;
  surname: string;
  id: string;
  fee: number;
  feeUSD?: any;
}

interface AddressInfo {
  contactName: string;
  contactPhone: string;
  city: string;
  country: string;
  address: string;
  details: string;
  zipCode: string;
  id: string;
}

export interface UserInfo {
  phone: string;
  firebase_id: string;
  notification_permission: boolean;
  notification_token: string;
  insta: InstaProfile;
  tiktok: TiktokProfile;
  birthday: Date;
  birthday_lastupdate: Date;
  age: number;
  job: string;
  name: string;
  surname: string;
  score: number;
  email: string;
  gender: string;
  profile_complete: boolean;
  school_type: string;
  school_name: string;
  city: string;
  country: string;
  language: string;
  money: MoneyInfo;
  hobbies: string[];
  sharing_type: string;
  last_login: Date;
  applications_update: Date;
  hasNotificationPermission: boolean;
  onesignal_pushToken: string;
  onesignal_userId: string;
  currency: string;
  password: number;
  passwordTime: Date;
  verification: boolean;
  denied_verification: boolean;
  verification_last_action: Date;
  deleted: boolean;
  address: AddressInfo;
  deviceInfo: any;
  approved?: boolean;
}

export interface exchangeRatesInterface {
  USD: number;
  CAD: number;
  TRY: number;
  GBP: number;
}

export interface FilterSectionProps {
  users: UserInfo[];
  onFilterChange: (user: UserInfo[]) => void;
}

export interface ProfilesListProps {
  filteredUsers: UserInfo[];
  deleteUser: (id: string) => void;
}

export interface SingleProfileProps {
  user: UserInfo;
  deleteUser: (id: string) => void;
  approved: boolean | undefined;
  setApproved: (arg: string) => void;
}

export interface SingleProfileMoreProps {
  user: UserInfo;
  more: boolean;
}
