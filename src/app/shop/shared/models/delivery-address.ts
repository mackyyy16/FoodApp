export class DeliveryAddress {
    firstname: string;
    lastname: string;
    street: string;
    postcode: string;
    city: string;
    email: string;
    phone: string;
    addition: string;

    static initDeliveryAdressValue: DeliveryAddress = {
        firstname: "",
        lastname: "",
        street: "",
        postcode: "",
        city: "",
        email: "",
        phone: "",
        addition: ""
    }
}