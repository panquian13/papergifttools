export type user = [
    {
        id: number,
        name: string,
        email: string,
        password: string,
    },
];

export type products = [
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