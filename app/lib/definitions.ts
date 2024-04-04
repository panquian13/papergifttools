export type User = [
    {
        id: number,
        name: string,
        email: string,
        password: string,
    },
];

export type Products = [
    {
        id: number,
        name: string,
        code: string,
        categoryType: number,
        size: string,
        units: string,
        color: string,
        description: string,
        dateAdded: string,
        dateLastUpdate: string,
    },
];

export type Providers = [
    {
        id: number,
        name: string,
        code: string,
        type: string,
        address: string,
        email: string,
        phone: string,
        website: string,
    },
];

export type Clients = [
    {
        id: number,
        name: string,
        address: string,
        email: string, 
        phone: string,
    },
];

export type Sale = [
    {
        id: number,
        clientId: number, 
        dateSale: number,
        totalAmount: number,
    },
];

export type SalesRelation = [
    {
        id: number,
        saleId: number,
        amount: number,
    },
];