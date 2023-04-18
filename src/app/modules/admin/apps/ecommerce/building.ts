export interface Building<T> {
    success: boolean;
    message: string;
    configs: T;
    zone: any;
    floorList: any;
    wingList: any;
    isActive: boolean;
    unitCost: any;
    extendedCost: any;
    buildingImage: string;
    buildingConfig: any[];
    noOFFloors: any;
}

export interface Config<T> {
    uniqueId: string;
    buildingNo: any;
    buildingName: string;
    description: any;
    date_constructed: any;
    architect: any;
    contractor: string;
    construction_Cost: string;
    renovation_History: any;
    campus: T;
}

export interface Campu {
    campusId: string;
    name: string;
    addressLine1: string;
    addressLine2: any;
    city: string;
    state: any;
    zipCode: string;
    country: string;
    county: any;
    assets: any;
    createdBy: any;
    createdOn: any;
    modifiedOn: any;
    modifiedBy: any;
    status: number;
    no: any;
    territory: string;
    campusImage: any;
    custodialCrewLeader: any;
    campusType: any;
    clientID: string;
}