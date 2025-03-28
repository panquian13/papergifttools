export type User = {
        userId: number,
        name: string,
        email: string,
        password: string,
    };

export type Products = {
        productId: number,
        name: string,
        code: string,
        categoryType: number,
        size: string,
        units: string,
        color: string,
        description: string,
        dateAdded: string,
        dateLastUpdate: string,
    };

export type Providers = {
        providerId: number,
        name: string,
        code: string,
        type: string,
        address: string,
        email: string,
        phone: string,
        website: string,
    };

export type Clients = {
        clientId: number,
        name: string,
        address: string,
        email: string, 
        phone: string,
    };

export type Sale = {
        saleId: number,
        clientId: number, 
        dateSale: number,
        totalAmount: number,
    };

export type SalesRelation = {
        salesRelationId: number,
        saleId: number,
        amount: number,
    };

export type Materials = {
        id: number,
        name: string,
        materialtypeid: number,
        materialname: string,
        size: string,
        color: string,
        description: string,
    };

export type MaterialType = {
        materialtypeid: number,
        name: string,
        description: string,
    };
