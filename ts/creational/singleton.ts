class Singleton {
    private static instance;
    private readonly _data: string;

    constructor(data: string) {
        this._data = data;
    }

    public static getInstance(data: string): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(data);
        }

        return Singleton.instance;
    }

    get data(): string {
        return this._data;
    }
}

const singleton1 = Singleton.getInstance('test1');
console.log(singleton1.data);

const singleton2 = Singleton.getInstance('test2');
console.log(singleton2.data);

console.log(singleton1 === singleton2);
