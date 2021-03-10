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
        expect(e.stack).toBe('NBSError: foo\n' +
            '    at Object.<anonymous> (/development/nbsolutions/error/spec/NBSError.spec.ts:7:13)\n' +
            '    at Object.asyncJestLifecycle (/development/nbsolutions/error/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:58:37)\n' +
            '    at /development/nbsolutions/error/node_modules/jest-jasmine2/build/queueRunner.js:45:12\n' +
            '    at new Promise (<anonymous>)\n' +
            '    at mapper (/development/nbsolutions/error/node_modules/jest-jasmine2/build/queueRunner.js:28:19)\n' +
            '    at /development/nbsolutions/error/node_modules/jest-jasmine2/build/queueRunner.js:75:41\n' +
            '    at processTicksAndRejections (internal/process/task_queues.js:93:5)'
        );
    });

    it('NBSError is not an Error instance', () => {
        expect(e instanceof Error).toBe(false);
    });
});
