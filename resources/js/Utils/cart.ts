import { ProductProps } from "@/types/products";

export function getCart(): ProductProps[] {
    return JSON.parse(sessionStorage.getItem("cart") || "[]");
}

export function saveProductsToStorage(products: ProductProps[]) {
    sessionStorage.setItem("products", JSON.stringify(products));
}

export function setCart(cart: ProductProps[]) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

export function getProductById(productId: number): ProductProps | null {
    // Get the product list from the sessionStorage
    const productList: ProductProps[] = JSON.parse(
        sessionStorage.getItem("products") || "[]"
    );

    // Find the product by its id
    const product = productList.find((product) => product.id === productId);

    return product || null;
}

export function addToCart(productId: number) {
    console.info(productId);
    const product = getProductById(productId);
    if (!product) {
        throw new Error("Product not found");
    }

    const cart = getCart();
    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    setCart(cart);
}
