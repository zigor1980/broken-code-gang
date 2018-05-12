import { expect } from 'chai';
import formatColor from './formatColor';

describe('Helpers::formatColor', () => {
    it('Return null if isn\'t color', () => {
    // setup
        const expectResult = null;
        // execute
        const result = formatColor('Simple');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
    it('Return type "bold" if it\'s color', () => {
        // setup
        const expectResult = {
            type: 'color',
            text: 'color',
            color: '#333333',
        };
        // execute
        const result = formatColor('#333333-color');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
});
