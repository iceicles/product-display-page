import { productApi } from "../services/ProductDetailService/product.service";
import { iProductData } from "../redux/models/product.interface";
import { useAppSelector } from "./use-typed-selector";

export const useProduct = (): iProductData | undefined => {
    const { code } = useAppSelector(state => {
        return state.productDetails
    })
    const state = productApi.endpoints.getProductDetails.useQueryState(code);
    return state.data;
}