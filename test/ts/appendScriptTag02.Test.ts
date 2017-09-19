import { appendScriptTag } from "../../src/ts/appendScriptTag";
import { dataTicketAttribute } from "../../src/ts/arConstants";
import * as onElementLoad from "../../src/ts/onElementLoad";

describe('appendScriptTag 02', () => {
    beforeAll((action:DoneFn)=>{
        let expectedSrc1 = 'test/resources/test_script1.js';
        let expectedSrc2 = 'test/resources/test_script2.js';
        let expectedTicket1 = 'ticket1';
        let expectedTicket2 = 'ticket2';

        spyOn(onElementLoad, 'onElementLoad').and.callFake(()=>{
            action();
        });

        appendScriptTag(expectedSrc1, expectedTicket1);
        appendScriptTag(expectedSrc2, expectedTicket2);

        let scripts = document.getElementsByTagName('script');
        let src1: string = scripts[scripts.length - 2].getAttribute("src");
        let src2: string = scripts[scripts.length - 1].getAttribute("src");
        let ticket1: string = scripts[scripts.length - 2].getAttribute(dataTicketAttribute);
        let ticket2: string = scripts[scripts.length - 1].getAttribute(dataTicketAttribute);

        expect(expectedSrc1).toEqual(src1);
        expect(expectedSrc2).toEqual(src2);
        expect(expectedTicket1).toEqual(ticket1);
        expect(expectedTicket2).toEqual(ticket2);
    });

    it('check tag', () => {
        expect(true).toEqual(true);
        let scripts = document.getElementsByTagName('script');
        let script01 = scripts[scripts.length - 1];
        let script02 = scripts[scripts.length - 2];
        script01.parentNode.removeChild(script01);
        script02.parentNode.removeChild(script02);
    });
});