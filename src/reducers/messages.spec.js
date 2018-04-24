import { expect } from 'chai';
import {sinon} from 'sinon';
import messages from './messages';
import * as ActionType from '../actions/messages';

describe.only('Reducer::Messages', () => {

    it('returns items (empty array), next (true), loading(true) if state is undefined', () => {
        // setup
        const state = null;
        const expectedNewState = {
            items: [],
            next: true,
            loading: true,
        };

        // execute
        const newState = messages(state, { type: 'unknown' });

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on MESSAGE_ADD returns new state with added messages', () => {
        // setup
        const state =
            {
                items: [{ name: '1message' }, { name: '2message' }, { name: '3message' }],
                next: null,
                loading: false,
                count: 0,
            };
        const newMessage = { name: '4message' };
        const action = ActionType.addMessage(newMessage);
        const expectedNewState =
             {
                 items: [{ name: '1message' }, { name: '2message' }, { name: '3message' }, { name: '4message' }],
                 next: null,
                 loading: false,
                 count: 0,
             };
        // execute

        const newState = messages(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on MESSAGES_LOADING returns new state with loaded messages', () => {
        // setup
        const state =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: true,
                loading: false,
                count: 3,
            };
        const action = {
            type: 'MESSAGES_LOADING',
            loading: true
        };
        const expectedNewState =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: true,
                loading: true,
                count: 3,
            };

        // execute

        const newState = messages(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on MESSAGES_LOADED returns new state with loaded messages', () => {
        // setup
        const state =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: true,
                loading: true,
                count: 3,
            };
        const newMessages = {
            items: [{ name: '4message' }, { name: '5message' }, { name: '6message' }],
            next: null,
            count: 6,
        };
        const action = {
            type: 'MESSAGES_LOADED',
            messages: newMessages
        };
        const expectedNewState =
            {
                items: [
                    { name: '6message' },
                    { name: '5message' },
                    { name: '4message' },
                    { name: '3message' },
                    { name: '2message' },
                    { name: '1message' }
                    ],
                next: null,
                loading: true,
                count: 6,
            };

        // execute

        const newState = messages(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on MESSAGES_RELOAD returns new state with empty array of messages', () => {
        // setup
        const state =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: false,
            };
        const action = {
            type: 'MESSAGES_RELOAD',
        };
        const expectedNewState =
            {
                items: [],
                next: true,
            };

        // execute

        const newState = messages(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on MESSAGE_LOAD_ERROR returns new state with error', () => {
        // setup
        const state =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: true,
                loading: true
            };
        const action = {
            type: 'MESSAGE_LOAD_ERROR',
            error: 'Exterminate!'
        };
        const expectedNewState =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: true,
                loading: true,
                error: 'Exterminate!'
            };

        // execute

        const newState = messages(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on MESSAGE_SEND_ERROR returns new state with error', () => {
        // setup
        const state =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: true,
                loading: true
            };
        const action = {
            type: 'MESSAGE_SEND_ERROR',
            error: 'Exterminate!'
        };
        const expectedNewState =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: true,
                loading: true,
                error: 'Exterminate!'
            };

        // execute

        const newState = messages(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
    it('on USER_SIGN_OUT returns new state with empty array of messages', () => {
        // setup
        const state =
            {
                items: [{ name: '3message' }, { name: '2message' }, { name: '1message' }],
                next: false,
                loading: false
            };
        const action = {
            type: 'USER_SIGN_OUT',
        };
        const expectedNewState =
            {
                items: [],
                next: true,
                loading: true
            };

        // execute

        const newState = messages(state, action);

        // verify
        expect(newState).to.deep.equal(expectedNewState);
    });
});
