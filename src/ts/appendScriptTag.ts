import { dataTicketAttribute } from "./arConstants";
import { onElementLoad } from "./onElementLoad";

/**
 * Append the tag at the end of the tag body.
 * 
 * @param src 
 * @param ticket 
 */
export const appendScriptTag = (src: Readonly<string>, ticket: Readonly<string>) => {
    const bodyElement = document.getElementsByTagName('body')[0];

    // JS
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.defer = true;
    scriptTag.src = src;
    scriptTag.setAttribute(dataTicketAttribute, ticket);
    scriptTag.onload = () => {
        onElementLoad(src, ticket);
    };

    bodyElement.appendChild(scriptTag);
}