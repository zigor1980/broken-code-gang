import { expect } from 'chai';
import formatList from './formatList';

describe('Helpers::formatList', () => {
    it('Return null if isn\'t list', () => {
    // setup
        const expectResult = null;
        // execute
        const result = formatList('Simple');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
    it('Return type "bold" if it\'s list', () => {
        // setup
        const expectResult = {
            type: 'list',
            items: ['list1', 'list2', 'list3'],
        };
        // execute
        const result = formatList('list-list1/list2/list3');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
});
