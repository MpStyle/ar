import { importStatusMap } from "./arStatus";
import { ImportScriptStatus } from "./arTypes";

/**
 * Set the element status to "isLoading"
 * 
 * @param src 
 */
export const elementIsLoading = (src: string): ImportScriptStatus => (
    importStatusMap[src] = {
        isLoading: true,
        isLoaded: false
    } as ImportScriptStatus
)