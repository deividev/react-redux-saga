import { ACTIONS_PRODUCTS } from "../../models/enums/actionProduct.enum"




export const cleanProductList = (index) => {
  return {
    type: ACTIONS_PRODUCTS.BORRAR,
    payload: index
  }
}


export const createProductList = (productList) => {
  return {
    type: ACTIONS_PRODUCTS.CREAR,
    payload: productList
  }
}
