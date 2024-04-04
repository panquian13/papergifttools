import Image from 'next/image';
import { fetchProducts } from '@/app/lib/data';

export default async function ProductsTable({
    query,
}: {
    query: string,
}) {
    const products = await fetchProducts(query);

    return (
        <div className='mt-6 flow-root'></div>
    )
}