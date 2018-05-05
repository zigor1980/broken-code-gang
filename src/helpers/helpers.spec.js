import { expect } from 'chai';
import shortenName from './shortenName';
// import { signInUser } from '../actions/signInUser';
// import { getCurUserInfo } from '../actions/getCurUserInfo';

describe('Helpers::shortenName', function () {
    it('Return 2 first letters if name is a single word', () => {
        // setup
        const expectResult = 'SI';
        // execute
        const result = shortenName('Simple');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
    it('Return first letters of 2 first words if name contain words', () => {
        // setup
        const expectResult = 'SI';
        // execute
        const result = shortenName('Simple Image');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
});