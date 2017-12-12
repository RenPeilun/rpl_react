import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Alert from './Alert';

describe('Alert', () => {

	// const element = ReactTestUtils.renderIntoDocument(<Alert />);

    xit('往页面插入一段带有strong标签的组件', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Alert>
                <strong>Message</strong>
            </Alert>
        );
        console.log(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'strong'));
        expect.toBeTruthy(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'strong'));
    });
});