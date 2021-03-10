
export class NBSError extends Error {
    public constructor(message: string) {
        super(message);

        if ((<any>Error).captureStackTrace) {
            (<any>Error).captureStackTrace(this, NBSError)
        }
    }
}
