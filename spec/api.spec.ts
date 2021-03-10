
import * as api from '../src/api';
import {NBSError} from '../src/NBSError';

describe('Public API', () => {
    it('default', () => {
        expect(api.default).toBe(NBSError);
    });

    it('NBSError', () => {
        expect(api.NBSError).toBe(NBSError);
    });
});
