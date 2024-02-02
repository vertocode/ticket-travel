import {Ticket} from "@/types/Ticket";

export interface TicketCart extends Ticket {
    quantity: number
}

export interface CartState {
    tickets: TicketCart[]
}