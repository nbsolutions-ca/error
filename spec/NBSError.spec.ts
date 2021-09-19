import { NBSError } from "../src/NBSError";

describe('NBSError', () => {
    let e: NBSError = null;

    beforeEach(() => {
        e = new NBSError('foo');
    });

    it('constructor name should be NBSError', () => {
        expect(e.constructor.name).toBe('NBSError');
    });

    it('error name should be NBSError', () => {
        expect(e.name).toBe('NBSError');
    });

    it('error contains stacktrace', () => {
        expect(e.stack).toMatch(/NBSError: foo\n/);
    });

    it('NBSError is not an Error instance', () => {
        expect(e instanceof Error).toBe(false);
    });
});
