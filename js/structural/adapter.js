class OldConverter {
    data;

    constructor(data) {
        this.data = `${data}_123`;
    }
}

class NewConverter {
    data;

    constructor(date) {
        this.data = date;
    }

    get converted() {
        return `${this.data}_123`;
    }
}

class Adapter {
    data;

    constructor(data) {
        const newDateConverter = new NewConverter(data);
        this.data = newDateConverter.converted;
    }
}

const oldConverter = new OldConverter('data');
console.log(oldConverter.data);

const newConverter = new NewConverter('data');
console.log(newConverter.converted);

const adapterConverter = new Adapter('data');
console.log(adapterConverter.data);

