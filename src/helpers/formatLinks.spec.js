import { expect } from 'chai';
import formatLinks from './formatLinks';
// import { signInUser } from '../actions/signInUser';
// import { getCurUserInfo } from '../actions/getCurUserInfo';

describe('Helpers::formatLinks', () => {
    it('Return type "text" if isn\'t link', () => {
    // setup
        const expectResult = null;
        // execute
        const result = formatLinks('Simple');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
    it('Return type "image" if is\'t link of image', () => {
        // setup
        const expectResult = {
            type: 'image',
            src: 'https://i.gifer.com/7PUr.gif',
        };
        // execute
        const result = formatLinks('https://i.gifer.com/7PUr.gif');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
    it('Return type "link" if is\'t link', () => {
        // setup
        const expectResult = {
            type: 'link',
            src: 'https://i.ger.com/',
        };
        // execute
        const result = formatLinks('https://i.ger.com/');
        // verify
        expect(result).to.deep.equal(expectResult);
    });
    // https://i.gifer.com/7PUr.gif
});
