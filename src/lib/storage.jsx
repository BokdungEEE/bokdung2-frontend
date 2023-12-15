export class Stroage {
    constructor() {
        /**
         * @type {string}
         */
        this.account = "";
    }

    static saveStorage() {
        localStorage.setItem("storage", JSON.stringify(this));
    }

    static loadStroage() {
        const storage = new Storage();

        const data = localStorage.getItem("storage");

        if (data) {
            const parsed = JSON.parse(data);
            storage.account = parsed.account;
        }

        return storage;
    }
}