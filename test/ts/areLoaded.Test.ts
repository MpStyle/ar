import { importStatusMap } from "../../src/ts/arStatus";
import { ImportScriptStatus } from "../../src/ts/arTypes";
import { areLoaded } from "../../src/ts/areLoaded";

describe('areLoaded', () => {
    it('isLoaded: false, isLoading: false', () => {
        importStatusMap['script1'] = {
            isLoaded: false,
            isLoading: false
        } as ImportScriptStatus;

        expect(areLoaded(['script1'])).toBeFalsy();
    });

    it('isLoaded: false, isLoading: true', () => {
        importStatusMap['script1'] = {
            isLoaded: false,
            isLoading: true
        } as ImportScriptStatus;

        expect(areLoaded(['script1'])).toBeFalsy();
    });

    it('isLoaded: true, isLoading: true', () => {
        importStatusMap['script1'] = {
            isLoaded: true,
            isLoading: true
        } as ImportScriptStatus;

        expect(areLoaded(['script1'])).toBeTruthy();
    });

    it('one is isLoaded/isLoading: false', () => {
        importStatusMap['script1'] = {
            isLoaded: false,
            isLoading: false
        } as ImportScriptStatus;

        importStatusMap['script2'] = {
            isLoaded: true,
            isLoading: false
        } as ImportScriptStatus;

        expect(areLoaded(['script1', 'script2'])).toBeFalsy();
    });

    it('All have isLoaded: true', () => {
        importStatusMap['script1'] = {
            isLoaded: true,
            isLoading: false
        } as ImportScriptStatus;

        importStatusMap['script2'] = {
            isLoaded: true,
            isLoading: false
        } as ImportScriptStatus;

        expect(areLoaded(['script1', 'script2'])).toBeTruthy();
    });
})