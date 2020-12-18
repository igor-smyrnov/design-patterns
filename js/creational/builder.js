// Chain of responsibility ?
class Builder {
    _parts = [];
    _product = '';

    add(part) {
        this._parts.push(part);
        return this;
    }

    create() {
        this._product = `Product parts: ${this._parts.join(', ')}`
    }

    get product() {
        return this._product;
    }
}

const someBuilder = new Builder();
someBuilder.add('PartA1').add('PartB1').add('PartC1').create();
console.log(someBuilder.product)
