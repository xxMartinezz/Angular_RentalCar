export class Car 
{
    id: number;
    carName: string;
    carPrice: number;
    limit?: number;
    carImage?: string;
    available: boolean;
    numberOfSeats?: number;

    constructor(id?: number, name?: string, price?: number, available?: boolean) 
    {
        this.id = id;
        this.carName = name;
        this.carPrice = price;
        this.available = available;
    }
}