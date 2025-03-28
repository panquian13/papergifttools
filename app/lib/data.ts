import { sql } from '@vercel/postgres';
import { Products, Materials, MaterialType } from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts(query: string) {
    noStore();
    try {
        const data = await sql<Products>`
        SELECT id,
        name,
        code,
        categoryType,
        size,
        units,
        color,
        description,
        dateAdded,
        dateLastUpdate FROM Products ORDER BY dateLastUpdate DESC`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products');
    }
}

export async function fetchMaterialTypes(){
    noStore();
    try{
        const data = await sql<MaterialType>
        `SELECT materialtypeid, name, description FROM materialType ORDER BY materialtypeId`
        
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Material Types');
    }
}

export async function fetchMateryalTypeById( id: string ){
    noStore();
    try {
        const data = await sql<MaterialType> `
            SELECT materialtypeid, name, description FROM materialType
            WHERE materialtypeid = ${id};
        `;

        const materialType = data.rows.map((materialtypeitem) => ({
            ...materialtypeitem,
        }));

        return materialType[0];
    } catch (error) {
        console.error('Database error', error);
        throw new Error('Failed to fetch materialType.');
    }
}
