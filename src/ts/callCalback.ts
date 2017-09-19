import { areLoaded } from "./areLoaded";

/**
 * Calls <i>callback</i> if all <i>srcs</i> are loaded.<br />
 * Returns true if the callback is called, otherwise false.
 * 
 * @param srcs 
 * @param callback 
 */
export const callCallback = (srcs: Array<string>, callback: () => void): boolean => {
    if (areLoaded(srcs) && callback) {
        callback();
        return true;
    }

    return false;
}