
import { Map } from 'immutable';

export interface CounterState extends Map<string, any> {
  value: number;
}