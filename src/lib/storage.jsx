export class BokdungStroage {
    constructor() {
        /**
         * @type {string}
         */
        this.userIdx = -1;
        this.accessToken = "";
        this.refreshToken = "";
    }

    saveStorage() {
        localStorage.setItem("storage", JSON.stringify({
            userIdx: this.userIdx,
            accessToken: this.accessToken,
            refreshToken: this.refreshToken,
        }));
    }

    static loadStroage() {
        const storage = new BokdungStroage();

        const data = localStorage.getItem("storage");

        if (data !== "undefined") {
            const parsed = JSON.parse(data);
            storage.userIdx = parsed.userIdx;
            storage.accessToken = parsed.accessToken;
            storage.refreshToken = parsed.refreshToken;
        }

        return storage;
    }
}