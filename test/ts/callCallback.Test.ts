import { importStatusMap } from "../../src/ts/arStatus";
import { ImportScriptStatus } from "../../src/ts/arTypes";
import { callCallback } from "../../src/ts/callCalback";

describe("callCallback", () => {
    it("call", () => {
        importStatusMap['test_script.js'] = {
            isLoaded: true,
            isLoading: false
        } as ImportScriptStatus;

        expect(callCallback(['test_script.js'], () => {})).toBeTruthy();
    });

    it("not call 1", () => {
        expect(callCallback(['test_script3.js'], () => { })).toBeFalsy();
    });

    it("not call 2", () => {
        importStatusMap['test_script1.js'] = {
            isLoaded: false,
            isLoading: true
        } as ImportScriptStatus;

        expect(callCallback(['test_script1.js'], () => { })).toBeFalsy();
    });

    it("not call 3", () => {
        importStatusMap['test_script2.js'] = {
            isLoaded: false,
            isLoading: false
        } as ImportScriptStatus;

        expect(callCallback(['test_script2.js'], () => { })).toBeFalsy();
    });
});