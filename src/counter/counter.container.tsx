import hocs from 'common-hocs';
import { selectValue } from './selectors';
import { countChanged, countChangedSlow  } from './actions';
import Counter from './counter.presentation';
import { CounterState } from './state';

const mapState = (state: CounterState, props) => ({
  value: selectValue(state)
})

const mapDispatch = {
  onAdd: countChanged,
  onAddSlowly: countChangedSlow
};

export default hocs({
  redux: { mapState, mapDispatch },
  i18n: ['translation'],
  auth: ['user']
})(Counter);
