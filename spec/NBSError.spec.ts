import { NBSError } from "../src/NBSError";

describe('NBSError', () => {
    it('constructor name should be NBSError', () => {
        let e: NBSError = new NBSError('foo');
        expect(e.constructor.name).toBe('NBSError');
    });

    it('error name should be NBSError', () => {
        let e: NBSError = new NBSError('foo');
        expect(e.name).toBe('NBSError');
    });
});
