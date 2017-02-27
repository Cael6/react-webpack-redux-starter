import * as React from 'react';
import { PropTypes, Validator } from 'react';
import AutobindComponent from 'autobind-component';
import { CounterState } from './state';

interface CounterPropTypes {
  value: Validator<any>;
  onAdd: Validator<any>;
  onAddSlowly: Validator<any>;
  t: Validator<any>;
}

class Counter extends AutobindComponent<any, CounterState> {

  static propTypes: CounterPropTypes;

  onAdd() {
    const { onAdd, value } = this.props;

    return onAdd(value + 5);
  }

  onAddSlow() {
    const { onAddSlowly, value } = this.props;

    return onAddSlowly(value + 5);
  }

  render() {
    const { value, t } = this.props;

    return (<div>
      <h4>{ value }</h4>
      <button onClick={ this.onAdd }>{ t('add') }</button>
      <button onClick={ this.onAddSlow }>{ t('add_slowly') }</button>
    </div>);
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onAddSlowly: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default Counter;
