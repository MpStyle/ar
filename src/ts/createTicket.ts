/**
 * Create an unique key for the current execution of the library.
 * 
 * @param srcs 
 */
export const createTicket = (srcs: Array<string>): string => {
    let plainString = '';

    for (let i in srcs) {
        plainString += srcs[i];
    }

    let hash: number = 0, len: number = plainString.length;
    for (var i = 0; i < len; i++) {
        hash = ((hash << 5) - hash) + plainString.charCodeAt(i);
        hash |= 0; // to 32bit integer
    }

    return hash.toString();
}