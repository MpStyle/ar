import { createTicket } from "../../src/ts/createTicket";

describe("createTicket", () => {
    it("all are different", () => {
        let ticket01: string = createTicket(['script01', 'script02', 'script03']);
        let ticket02: string = createTicket(['script04', 'script05', 'script06']);
        let ticket03: string = createTicket(['script07', 'script08', 'script09']);

        expect(false).toEqual(ticket01 == ticket02);
        expect(false).toEqual(ticket01 == ticket03);
        expect(false).toEqual(ticket02 == ticket03);
    });

    it("same ticket for same input", () => {
        let ticket01: string = createTicket(['script01', 'script02', 'script03']);
        let ticket02: string = createTicket(['script01', 'script02', 'script03']);

        expect(ticket01 == ticket02).toBeTruthy();
    });
});