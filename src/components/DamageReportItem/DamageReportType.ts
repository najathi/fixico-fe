export type VehicleType = {
    id: string;
    model_id: string;
};

export type CustomerType = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export type DamageReportType = {
    uid: any;
    image: string;
    vehicle: VehicleType;
    customer: CustomerType;
    description: string;
    status: string;
};
