namespace app.models {
    export class Car {
        constructor(
            public make: string,
            public model: string,
            public color: string,
            public numDoors: number,
            public numSeats: number,
            public looksCool: boolean
        ) { }
    }

    export class Truck {
        constructor(
            public make: string,
            public model: string,
            public color: string,
            public numDoors: number,
            public numSeats: number,
            public hasBench: boolean
        ) { }
    }
}
