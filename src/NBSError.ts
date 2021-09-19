
import {NBSObject} from '@nbsolutions/object';
import {INBSError} from '@nbsolutions/interfaces';

/*
 * We use the Error interface instead of extending the Error object.
 * This is because if you extend Error, it will forcefully overwrite the constructor
 * losing access to it's name, which causes a wide range of negative side effects.
 * 
 * Unfortunately, this means you cannot use instanceof Error checks, but instanceof NBSError
 * checks should still work so that shouldn't be a big deal...
 */
export class NBSError<TErrorDetails = void> extends NBSObject implements Error, INBSError<TErrorDetails> {
    public name: string;
    public message: string;
    public stack: string;
    private $details: TErrorDetails;

    public constructor(message: string, details?: TErrorDetails) {
        super();
        this.name = this.constructor.name;
        this.message = message;
        this.$details = details;

        if ((Error as any).captureStackTrace) {
            (Error as any).captureStackTrace(this, NBSError)
        }
        else {
            this.stack = new Error().stack;
        }
    }

    public getDetails(): TErrorDetails {
        return this.$details;
    }

    protected _setMessage(message: string): void {
        this.message = message;
    }
}
