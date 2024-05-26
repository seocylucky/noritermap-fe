export interface MarkerDataType {
  facility_id: string;
  lat: string;
  lot: string;
  pfct_nm: string;
  addr: string;
  instl_place_cd_nm: string;
  // rating: number;
  // review_count: number;
  zip: string;
}

export interface OverlayProps {
  facility_id: string;
  pfct_nm: string;
  addr: string;
  zip: string;
  rating: number;
  reviewCnt: number;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface OverlayReviewResponses {
  status: number;
  data: {
    facilityId: number;
    rating: number;
    reviewCnt: number;
  };
}