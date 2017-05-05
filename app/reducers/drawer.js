import {DRAWER_TOGGLE} from '../actions/drawer';

export type drawerStateType = {
    toggle: boolean
};

type actionType = {
    type: string
};

export default function toggle(state : boolean = true, action : actionType) {
    switch (action.type) {
        case DRAWER_TOGGLE:
            return !state;
        default:
            return state;
    }
}
