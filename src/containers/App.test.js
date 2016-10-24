import assert from 'assert';
import React from 'react';
import $ from 'teaspoon';
import { noCallThru } from 'proxyquire';
import { jsdom } from 'jsdom';

const doc = jsdom('<!doctype html><html><body></body></html>');
global.window = doc.defaultView;
global.document = doc;

const proxyquireStrict = noCallThru();
const Counter = () => <div />;

const App = proxyquireStrict('./App', {
  '../components/Counter': Counter
}).App;

const mockProps = props => ({
  ...{
    updateCounter: () => null,
    count: 10
  },
  ...props
});

describe('src/containers/App', () => {
  it('should render the counter component and pass correct props', () => {
    const props = mockProps();
    const $counter = $(<App {...props} />)
      .render(true)
      .find(Counter);

    assert.equal($counter.length, 1, 'counter component not rendered');
    assert.equal($counter.props('count'), props.count, 'count property not passed');
    assert.equal($counter.props('onClick'), props.updateCounter, 'onClick property not passed');
  });
});
