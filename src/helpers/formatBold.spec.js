import { expect } from 'chai';
import formatBold from './formatBold';

describe('Helpers::formatBold', () => {
    it('Return null if isn\'t bold', () => {
    // setup
        const expectResult = null;
        // execute
        const result = formatBold('Simple');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
    it('Return type "bold" if it\'s bold', () => {
        // setup
        const expectResult = {
            type: 'bold',
            bold: 'bold',
        };
        // execute
        const result = formatBold('/b-bold');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
});
