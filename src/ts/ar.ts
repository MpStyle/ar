/**
 * Entry point of the library.
 * 
 * @param srcs 
 * @param callback 
 */
export const ar = (srcs: Array<string>, callback?: () => void): void => {
    const callCallback = (srcs: Array<string>, callback: () => void): boolean => {
        for (let i in srcs) {
            if (downloaded.indexOf(srcs[i]) == -1) return false;
        }

        if (callback) {
            callback();
        }

        return true;
    }

    // Are the sources already loaded by a previous execution of the function
    if (callCallback(srcs, callback)) {
        return;
    }

    for (let i in srcs) {
        let src: string = srcs[i];

        // Check if the src have to be imported
        if (downloaded.indexOf(src) == -1) {
            // Append script tag to body
            const scriptTag = document.createElement('script');

            scriptTag.type = 'text/javascript';
            scriptTag.async = true;
            scriptTag.src = src;
            scriptTag.onload = () => {
                // set script status to isLoading
                downloaded.push(src);

                callCallback(srcs, callback);
            };

            document.getElementsByTagName('body')[0].appendChild(scriptTag);
        }
    }
}

const downloaded: Array<string> = [];