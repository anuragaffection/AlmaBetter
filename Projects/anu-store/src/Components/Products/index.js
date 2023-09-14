
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../State/actions";
import ProductCard from "./ProductCart";


const Products = () => {
    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData().then((data) => {
            dispatch(setProducts(data));
        })
    }, [dispatch]);

    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        return data;
    }

    const productCards = products.map((product) => (
        <ProductCard
            key={Math.random()}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
        />
    ));


    return (
        <div className="grid grid-cols-1 gap-16 justify-center mt-16 md:grid-cols-2 lg:grid-cols-3">
            {productCards}
        </div>
    );
}

export default Products;