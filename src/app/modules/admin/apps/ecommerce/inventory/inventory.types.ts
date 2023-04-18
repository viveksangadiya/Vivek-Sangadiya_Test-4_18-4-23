export interface InventoryProduct
{
    id: string;
    category?: string;
    name: string;
    description?: string;
    tags?: string[];
    sku?: string | null;
    barcode?: string | null;
    brand?: string | null;
    vendor: string | null;
    stock: number;
    reserved: number;
    cost: number;
    basePrice: number;
    taxPercent: number;
    price: number;
    weight: number;
    thumbnail: string;
    images: string[];
    active: boolean;
}

export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface InventoryCategory
{
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand
{
    id: string;
    name: string;
    slug: string;
}

export interface InventoryTag
{
    id?: string;
    title?: string;
}

export interface InventoryVendor
{
    id: string;
    name: string;
    slug: string;
}



// ifm api :
// "success": true,
//     "message": "It is successful.",
//     "configs": [
//         {
//             "uniqueId": "3e8bfc34-3ca5-40ac-bd09-e896ac1b8e05",
//             "buildingNo": null,
//             "buildingName": "Building Cps 1 of Trry10-01-2023",
//             "description": null,
//             "date_constructed": "Jan  9 2023 12:00AM",
//             "architect": null,
//             "contractor": "Gopika",
//             "construction_Cost": "89500",
//             "renovation_History": null,
//             "campus": [
//                 {
//                     "campusId": "5149905a-bf14-4d06-82f7-e1d2acbc5a05",
//                     "name": "Campus 1 of Territory 1 for Cust1 10-01-2023",
//                     "addressLine1": "Add-1",
//                     "addressLine2": null,
//                     "city": "Patan",
//                     "state": null,
//                     "zipCode": "98562300",
//                     "country": "United States",
//                     "county": null,
//                     "assets": null,
//                     "createdBy": null,
//                     "createdOn": null,
//                     "modifiedOn": null,
//                     "modifiedBy": null,
//                     "status": 1,
//                     "no": null,
//                     "territory": "0203b5b7-0d16-487c-b836-e956e7ce0b64",
//                     "campusImage": null,
//                     "custodialCrewLeader": null,
//                     "campusType": null,
//                     "clientID": "00000000-0000-0000-0000-000000000000"
//                 }
//             ],
//             "zone": null,
//             "floorList": null,
//             "wingList": null,
//             "isActive": true,
//             "unitCost": null,
//             "extendedCost": null,


export interface ApiResponse<T>{
    success :string,
    message :string,
    configs : T
}

export interface Config<T>{
    uniqueId : string,
    buildingNo : number,
    buildingName:string,
    description:string,
    date_constructed:Date,
    architect:string,
    contractor:string,
    construction_Cost:number,
    renovation_History:string,
    campus : [T],
    zone:string,
    floorList:string,
    wingList:string,
    isActive:boolean,
    unitCost:number,
    extendedCost:number,
    buildingImage:string,
    buildingConfig:[],
    noOFFloors:number
}

export interface Campuss{
    campusId:string,
    name:string,
    addressLine1:string,
    addressLine2:string,
    city:string,
    state:string,
    zipCode:string,
    country:string,
    county:string,
    assets:string,
    createdBy:string,
    createdOn:string,
    modifiedOn:string,
    modifiedBy:string,
    status:number,
    no:any,
    territory:string,
    campusImage:any,
    custodialCrewLeader:any,
    campusType:any,
    clientID:any
}
// "campusId": "5149905a-bf14-4d06-82f7-e1d2acbc5a05",
//                     "name": "Campus 1 of Territory 1 for Cust1 10-01-2023",
//                     "addressLine1": "Add-1",
//                     "addressLine2": null,
//                     "city": "Patan",
//                     "state": null,
//                     "zipCode": "98562300",
//                     "country": "United States",
//                     "county": null,
//                     "assets": null,
//                     "createdBy": null,
//                     "createdOn": null,
//                     "modifiedOn": null,
//                     "modifiedBy": null,
//                     "status": 1,
//                     "no": null,
//                     "territory": "0203b5b7-0d16-487c-b836-e956e7ce0b64",
//                     "campusImage": null,
//                     "custodialCrewLeader": null,
//                     "campusType": null,
//                     "clientID": "00000000-0000-0000-0000-000000000000"