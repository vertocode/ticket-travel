import { CartState } from "@/types/CartState";

type RootTickets = { cartReducer: CartState }
export const tickets = (state: RootTickets) => state.cartReducer.tickets