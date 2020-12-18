class TargetConverter {
    public data;

    constructor(data) {
        this.data = data;
    }

    public convert() {
        this.data = `${this.data}_123`;
    }
}

class AdapteeConverter {
    private readonly _data;

    constructor(data) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    get converted() {
        return `${this.data}_123`;
    }
}

class Adapter extends TargetConverter {
    private adaptee: AdapteeConverter;

    constructor(adaptee: AdapteeConverter) {
        super(adaptee.data);
        this.adaptee = adaptee;
    }

    public convert() {
        this.data = this.adaptee.converted;
    }
}

const targetConverter = new TargetConverter('data');
targetConverter.convert();
console.log(targetConverter.data);

const adapteeConverter = new AdapteeConverter('data');
const adapterConverter = new Adapter(adapteeConverter);
adapterConverter.convert();
console.log(adapterConverter.data);
