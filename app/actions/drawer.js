import type {drawerStateType}
from '../reducers/drawer';

export const DRAWER_TOGGLE = "DRAWER_TOGGLE";

export function toggleDrawer() {
    return {type: DRAWER_TOGGLE};
}