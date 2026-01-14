export interface UnitRestrictions {
  minAge: number;
  maxAge: number;
  idRequired: boolean;
  minQuantity: number;
  maxQuantity: number;
  paxCount: number;
  pricingFrom: number;
}

export interface Unit {
  id: string;
  internalName: string;
  reference: string | null;
  type: string;
  requiredContactFields: any;
  restrictions: UnitRestrictions;
}

export interface OptionRestrictions {
  minUnits: number;
  maxUnits: number;
}

export interface ProductOption {
  id: string;
  internalName: string;
  reference: string | null;
  default: boolean;
  availabilityLocalStartTimes: any;
  cancellationCutoff: any;
  cancellationCutoffAmount: any;
  cancellationCutoffUnit: any;
  requiredContactFields: any;
  units: Unit[];
  restrictions: OptionRestrictions;
}

export interface Display {
  title: string;
  shortDescription: string | null;
  description: string | null;
}

export interface Location {
  address: string | null;
  city: string | null;
  country: string | null;
  postalCode: string | null;
  latitude: number | null;
  longitude: number | null;
}

export interface Duration {
  value: number;
  unit: string;
  serviceHours: any;
}

export interface Capacity {
  minGroup: number | null;
  maxGroup: number | null;
  minGuests: number | null;
  maxGuests: number | null;
}

export interface HtmlContent {
  inclusions: string | null;
  exclusions: string | null;
  itinerary: string | null;
  importantInfo: string | null;
}

export interface RichContent {
  features: any;
  mustKnows: any;
  faqs: any;
  categoryLabels: any;
}

export interface Media {
  thumbnail: string | null;
  cover: string | null;
  images: string[];
  videos: string[];
}

export interface Reviews {
  rating: number | null;
  count: number;
  totalBookings: number;
}

export interface Policies {
  cancellation: string | null;
  cancellationCutoffHours: number | null;
  refund: string | null;
}

export interface Supplier {
  id: string;
  name: string;
}

export interface BookberryContent {
  display: Display;
  location: Location;
  duration: Duration;
  capacity: Capacity;
  htmlContent: HtmlContent;
  richContent: RichContent;
  media: Media;
  reviews: Reviews;
  policies: Policies;
  customMeta: any[];
  supplier: Supplier;
  resellerPricing: any;
}

// Main Product Interface
export interface Product {
  id: string;
  internalName: string;
  reference: string | null;
  locale: string;
  timeZone: string;
  instantConfirmation: boolean;
  instantDelivery: boolean;
  availabilityRequired: boolean;
  availabilityType: string;
  deliveryFormats: string[];
  deliveryMethods: string[];
  redemptionMethod: string;
  productType: string;
  durationDays: number | null;
  options: ProductOption[];
  bookberryContent: BookberryContent;
}

export type ProductsResponse = Product[] | { data: Product[] };

// API Error Response
export interface ApiErrorResponse {
  message: string;
  statusCode: number;
}

