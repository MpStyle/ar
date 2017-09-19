import { importPropertiesMap } from "./arStatus";
import { callCallback } from "./callCalback";
import { elementIsLoaded } from "./elementIsLoaded";

/**
 * The tasks to do when the required js will be loaded:
 * <ul>
 *  <li>Set the status of js to "isLoaded"</li>
 *  <li>Try to call the callback</li>
 * </ul>
 * 
 * @param src 
 * @param ticket 
 */
export const onElementLoad = (src: string, ticket: string): void => {
    elementIsLoaded(src);
    let srcs: Array<string> = importPropertiesMap[ticket].srcs;
    let callback = importPropertiesMap[ticket].callback;
    callCallback(srcs, callback);
}