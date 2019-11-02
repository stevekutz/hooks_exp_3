 import {useGlobal, setGlobal} from 'reactn';

import addReactNDevTools from 'reactn-devtools';
addReactNDevTools();

export default () => {
    setGlobal({
        toggleTracker: [],
        count: 0,
    })
}