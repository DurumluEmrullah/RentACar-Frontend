export interface CreditCardResponse{
    id:number;
    customerId:number;
    cardNumber:string;
    securityNumber:string;
    mounthOfExpirationDate:string;
    yearOfExpirationDate:string;
    balance:number;
}