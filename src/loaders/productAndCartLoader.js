import { getStoredData } from "../utilities/fakedb";

export const productAndCartLoader = async() => {

    const loadProductData = await fetch('products.json');
    const products = await loadProductData.json();

    const saveData = getStoredData();
    const initialData = [];
    for (const id in saveData) {
        const findStoredData = products.find(product => product.id === id);
        if (findStoredData) {
            const quantity = saveData[id];
            findStoredData.quantity = quantity;
            initialData.push(findStoredData);

        }
    }

    return { products, initialData };

}