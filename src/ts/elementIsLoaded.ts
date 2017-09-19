import { importStatusMap } from "./arStatus";
import { ImportScriptStatus } from "./arTypes";

/**
 * Set the element status to "isLoaded"
 * 
 * @param src 
 */
export const elementIsLoaded = (src: string): ImportScriptStatus => (
    importStatusMap[src] = {
        isLoading: false,
        isLoaded: true
    } as ImportScriptStatus
)