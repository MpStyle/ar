import { appendScriptTag } from "./appendScriptTag";
import { importPropertiesMap, importStatusMap } from "./arStatus";
import { ImportRequest } from "./arTypes";
import { callCallback } from "./callCalback";
import { createTicket } from "./createTicket";
import { elementIsLoading } from "./elementIsLoading";

/**
 * Entry point of the library.
 * 
 * @param src 
 * @param callback 
 */
export const ar = (src: Array<string> | string, callback?: () => void): void => {
    if (!Array.isArray(src)) {
        src = [src];
    }

    // Are the sources already loaded by a previous execution of the function
    if (callCallback(src, callback)) {
        return;
    }

    let ticket: string = createTicket(src);

    importPropertiesMap[ticket] = {
        callback: callback,
        srcs: src
    } as ImportRequest;

    for (let i in src) {
        let currentSrc: string = src[i];
        let importStatus = importStatusMap[currentSrc];

        // Check if the src have to be imported
        let isLoaded: boolean = importStatus && (importStatus.isLoaded || importStatus.isLoading);

        if (!isLoaded) {
            elementIsLoading(currentSrc);
            appendScriptTag(currentSrc, ticket);
        }
    }
}