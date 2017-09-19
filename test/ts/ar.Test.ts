import { ar } from "../../src/ts/ar";

describe('ar', () => {
    beforeAll((action: DoneFn) => {
        ar([
            'test/resources/script01.js',
            'test/resources/script02.js',
            'test/resources/script03.js',
            'test/resources/script04.js',
            'test/resources/script05.js',
            'test/resources/script06.js'
        ], (): void => {
            action();
        });
    });

    it('load files and callback', () => {
        let scripts = document.getElementsByTagName('script');

        let src1: string = scripts[scripts.length - 6].getAttribute("src");
        expect(src1).toEqual('test/resources/script01.js');

        let src2: string = scripts[scripts.length - 5].getAttribute("src");
        expect(src2).toEqual('test/resources/script02.js');

        let src3: string = scripts[scripts.length - 4].getAttribute("src");
        expect(src3).toEqual('test/resources/script03.js');

        let src4: string = scripts[scripts.length - 3].getAttribute("src");
        expect(src4).toEqual('test/resources/script04.js');

        let src5: string = scripts[scripts.length - 2].getAttribute("src");
        expect(src5).toEqual('test/resources/script05.js');

        let src6: string = scripts[scripts.length - 1].getAttribute("src");
        expect(src6).toEqual('test/resources/script06.js');
    });
});