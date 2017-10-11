import { ar_css } from "../../src/ts/ar";

describe('ar', () => {
    beforeAll((action: DoneFn) => {
        ar_css([
            'test/resources/script01.css',
            'test/resources/script02.css',
            'test/resources/script03.css',
            'test/resources/script04.css',
            'test/resources/script05.css',
            'test/resources/script06.css'
        ], (): void => {
            action();
        });
    });

    it('load files and callback', () => {
        let scripts = document.getElementsByTagName('link');

        let src1: string = scripts[scripts.length - 6].getAttribute("href");
        expect(src1).toEqual('test/resources/script01.css');

        let src2: string = scripts[scripts.length - 5].getAttribute("href");
        expect(src2).toEqual('test/resources/script02.css');

        let src3: string = scripts[scripts.length - 4].getAttribute("href");
        expect(src3).toEqual('test/resources/script03.css');

        let src4: string = scripts[scripts.length - 3].getAttribute("href");
        expect(src4).toEqual('test/resources/script04.css');

        let src5: string = scripts[scripts.length - 2].getAttribute("href");
        expect(src5).toEqual('test/resources/script05.css');

        let src6: string = scripts[scripts.length - 1].getAttribute("href");
        expect(src6).toEqual('test/resources/script06.css');
    });
});