export interface Port {
    COORDINATES: [number, number];
    COUNTRY: string;
    LOCODE: string;
    NAME: string;
    SEARCH_PARAMETER: string;
    STATUS: string;
  }

export interface PortData{
  loading:string,
  portData : Port[],
  searchData:string[]
} 

export interface userData{
  userId : String,
  userName : String,
  email : String,
  profileImage : String
}

type FindCoordinatesType = (srcIndex: [number,number], destIndex: [number,number]) => void;

export interface MapInputLayerProps {
  findCoordinates: FindCoordinatesType;
}

export interface MapProps {
  srcCoordinate: [number,number]; 
  destCoordinate: [number,number];
}

export type PathCoordinates = {
  srcCoordinate: [number, number];
  destCoordinate: [number, number];
};
