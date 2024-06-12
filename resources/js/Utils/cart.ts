import { ProductProps } from "@/types/products";

export function getCart(): ProductProps[] {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function saveProductsToStorage(products: ProductProps[]) {
    localStorage.setItem("products", JSON.stringify(products));
}

export function setCart(cart: ProductProps[]) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function getProductById(productId: number): ProductProps | null {
    // Get the product list from the localStorage
    const productList: ProductProps[] = JSON.parse(
        localStorage.getItem("products") || "[]"
    );

    // Find the product by its id
    const product = productList.find((product) => product.id === productId);

    return product || null;
}

export function addToCart(productId: number) {
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
