import assert from 'assert';
import React from 'react';
import { spy } from 'sinon';
import $ from 'teaspoon';
import { Counter } from './counter';

const mockProps = props => ({
  ...{
    onClick: spy(),
    count: 10
  },
  ...props
});

describe('src/components/Counter', () => {
  it('should render two buttons and span containing the count', () => {
    const props = mockProps();
    const $Counter = $(<Counter {...props} />)
      .shallowRender();
    const $buttons = $Counter.find('button');
    const $span = $Counter.first('span');

    assert.equal($buttons.length, 2, 'missing two rendered buttons');
    assert.equal($span.text(), props.count, 'missing count props in the span tag');
  });

  it('should call onClick prop with increment and decremented count value', () => {
    const props = mockProps();
    const $Counter = $(<Counter {...props} />)
      .shallowRender();

    $Counter.first('button[data-test=inc]')
      .trigger('click');

    assert(
      props.onClick.calledWith($Counter.props('count') + 1),
      'onclick func with increment count not called or called incorrectly'
    );

    $Counter.first('button[data-test=dec]')
      .trigger('click');

    assert(
      props.onClick.calledWith($Counter.props('count') - 1),
      'onclick func with decrement count not called or called incorrectly'
    );
  });
});
