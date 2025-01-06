export class usuarios {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": address;
    "phone":string;
}
export class address {
    "street": string;
    "suite": string;
    "city": string;
    "zipcode": string;
    "geo": geo;
}
export class geo {
    "lat": string;
    "lng": string;
}