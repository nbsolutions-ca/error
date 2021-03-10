
export class NBSError implements Error {
    public name: string;
    public message: string;
    public stack: string;

    public constructor(message: string) {
        this.name = this.constructor.name;
        this.message = message;

        if ((<any>Error).captureStackTrace) {
            (<any>Error).captureStackTrace(this, NBSError)
        }
        else {
            this.stack = new Error().stack;
        }
    }
}
