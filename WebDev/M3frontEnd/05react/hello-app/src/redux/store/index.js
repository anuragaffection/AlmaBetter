
import {createStore, combinedReducers} from 'redux';
import { accountBalance } from '../reducer';



export const store = createStore (
    combinedReducers(
        {
            accountBalance : accountBalance,
        }
    )
)

