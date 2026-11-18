import { create } from "zustand";
import type { AuthorType } from "../types";


type CartStoreType = {
    items: AuthorType[],
    add: (item: AuthorType) => void,
    clearCart: () => void
}


export const useCart = create<CartStoreType>(
    (set) => ({
        items: [],
 
        add: (item) => {
            set(state => {
                return {
                    items: [...state.items, item]
                }
            })
        },
        
        clearCart: () => {
            set(state => {
                return {
                    items: []
                }
            })
        }
    })
)