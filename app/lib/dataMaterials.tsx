import { sql } from "@vercel/postgres";
import { Materials } from "./definitions";
import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchMaterials(){
    noStore();
    try{
        const data = await sql<Materials>
        `SELECT M.id, M.name, MT.materialtypeid, MT.name as materialname, size, color, M.description 
        FROM materials as M
        LEFT JOIN materialType MT
        ON CAST(M.materialTypeid AS INTEGER) =  MT.materialtypeid
        ORDER BY M.id`

        return data.rows;
    }catch (error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Materials');
    }
}

export async function fetchMaterialById( id : number) {
    noStore();
    try {
        const data = await sql<Materials>
        `SELECT M.id, M.name, MT.materialtypeid, MT.name as materialname, size, color, M.description 
        FROM materials as M
        LEFT JOIN materialType MT
        ON CAST(M.materialTypeid AS INTEGER) =  MT.materialtypeid WHERE M.id = ${id}`;


        const material = data.rows.map((materialitem) => ({
            ...materialitem,
        }));

        console.log(material);
        return material[0];

    } catch (error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Material by Id');
    }
}