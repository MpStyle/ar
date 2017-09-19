import { importStatusMap } from "./arStatus";
import { ImportScriptStatus } from "./arTypes";

/**
 * Checks if all sources are loaded.
 * 
 * @param srcs 
 */
export const areLoaded = (srcs: Array<string>): boolean => {
    let areLoaded: boolean = true;

    for (let i in srcs) {
        const importStatus: ImportScriptStatus = importStatusMap[srcs[i]];
        areLoaded = areLoaded && importStatus && importStatus.isLoaded;
    }

    return areLoaded;
}