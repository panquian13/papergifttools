import { sql } from '@vercel/postgres';
import { Products } from './definitions';
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
