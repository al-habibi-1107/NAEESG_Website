export default class Product {
    constructor(id, name, category, brand, price, description) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.price = price;
        this.description = description;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            category: this.category,
            brand: this.brand,
            price: this.price,
            description: this.description,
        };
    }

    static fromJSON(json) {
        return new Product(json.id, json.name, json.category, json.brand, json.price, json.description);
    }
}