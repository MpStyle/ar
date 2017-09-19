import { appendScriptTag } from "../../src/ts/appendScriptTag";
import { dataTicketAttribute } from "../../src/ts/arConstants";
import * as onElementLoad from "../../src/ts/onElementLoad";

describe('appendScriptTag 01', () => {
    beforeAll((action:DoneFn)=>{
        let expectedSrc1 = 'test/resources/test_script.js';
        let expectedTicket1 = 'ticket1';

        spyOn(onElementLoad, 'onElementLoad').and.callFake(()=>{
            action();
        });

        appendScriptTag(expectedSrc1, expectedTicket1);

        let scripts = document.getElementsByTagName('script');
        let src: string = scripts[scripts.length - 1].getAttribute("src");
        let ticket: string = scripts[scripts.length - 1].getAttribute(dataTicketAttribute);

        expect(expectedSrc1).toEqual(src);
        expect(expectedTicket1).toEqual(ticket);
    });

    it('check tag', () => {
        expect(true).toEqual(true);
        let scripts = document.getElementsByTagName('script');
        let script = scripts[scripts.length - 1];
        script.parentNode.removeChild(script);
    });
});