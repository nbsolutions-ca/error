
import {NBSObject} from '@nbsolutions/object';

/*
 * We use the Error interface instead of extending the Error object.
 * This is because if you extend Error, it will forcefully overwrite the constructor
 * losing access to it's name, which causes a wide range of negative side effects.
 * 
 * Unfortunately, this means you cannot use instanceof Error checks, but instanceof NBSError
 * checks should still work so that shouldn't be a big deal...
 */
export class NBSError extends NBSObject implements Error {
    public name: string;
    public message: string;
    public stack: string;

    public constructor(message: string) {
        super();
        this.name = this.constructor.name;
        this.message = message;

        if ((Error as any).captureStackTrace) {
            (Error as any).captureStackTrace(this, NBSError)
        }
        else {
            this.stack = new Error().stack;
        }
    }

    protected _setMessage(message: string): void {
        this.message = message;
    }
}
