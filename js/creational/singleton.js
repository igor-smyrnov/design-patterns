class Singleton {
    static instance
    _data;

    constructor(data) {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this._data = data;
        Singleton.instance = this;
        return Singleton.instance;
    }

    get data() {
        return this._data;
    }
}

const singleton1 = new Singleton('test1');
console.log(singleton1.data);

const singleton2 = new Singleton('test2');
console.log(singleton2.data);

console.log(singleton1 === singleton2)
