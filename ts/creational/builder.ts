abstract class Builder {
    protected _parts = [];
    private _product = '';

    public add(part: any): Builder {
        return this;
    };

    public reset(): void {
        this._parts = [];
    }

    public create(): void {
        this._product = `Product parts: ${this._parts.join(', ')}`;
    }

    get product(): string {
        const result = this._product;
        this.reset();
        return result;
    }
}

class ABuilder extends Builder {
    public add(part: string): Builder {
        this._parts.push(`A${part}`);
        return this;
    }
}

class BBuilder extends Builder {
    public add(part: string): Builder {
        this._parts.push(`B${part}`);
        return this;
    }
}

class Director {
    private _builder: Builder;

    public set builder(value: Builder) {
        this._builder = value;
    }

    public buildMvp() {
        this._builder.add('1Part').create();
        console.log(this._builder.product);
    }

    public buildFullProduct() {
        this._builder.add('1Part').add('2Part').add('3Part').create();
        console.log(this._builder.product);
    }
}

const director = new Director();
const aBuilder = new ABuilder();
const bBuilder = new BBuilder();

director.builder = aBuilder;
director.buildMvp();
director.buildFullProduct();

director.builder = bBuilder;
director.buildMvp();
director.buildFullProduct();
