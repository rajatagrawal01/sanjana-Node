import React from 'react'
import { useParams } from 'react-router-dom'
import all_product from "../component/Assets/all_product";
import ProductDisplay from '../component/product/ProductDisplay';
import Breadcrum from '../component/breadcrum/Breadcrum';
import Description from '../component/description/Description';
import Relatedproduct from '../component/relatedproducts/Relatedproduct';
export default function Product() {
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <Description />
            <Relatedproduct />
        </div>
    )
}
