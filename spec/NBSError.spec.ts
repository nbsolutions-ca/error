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

    it('error contains stacktrace', () => {
        let e: NBSError = new NBSError('foo');
        expect(e.stack).toBe('NBSError: foo\n' +
            '    at Object.<anonymous> (/development/nbsolutions/error/spec/NBSError.spec.ts:15:27)\n' +
            '    at Object.asyncJestTest (/development/nbsolutions/error/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:106:37)\n' +
            '    at /development/nbsolutions/error/node_modules/jest-jasmine2/build/queueRunner.js:45:12\n' +
            '    at new Promise (<anonymous>)\n' +
            '    at mapper (/development/nbsolutions/error/node_modules/jest-jasmine2/build/queueRunner.js:28:19)\n' +
            '    at /development/nbsolutions/error/node_modules/jest-jasmine2/build/queueRunner.js:75:41\n' +
            '    at processTicksAndRejections (internal/process/task_queues.js:93:5)'
        );
    });
});
