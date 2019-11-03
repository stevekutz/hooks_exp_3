# Hooks Experiment #3
## Controlled components interacting with global state managed with Reactn

## Hooks Implmentation Features
- ### Button toggle state with conditionally rendered styles
- ### Checkbox as slider using label prop 
- ### Checkbox state appends status to glabal state and adds to count
- ### Logged state changes rendered using layered styling to indicae last Card that was updated
- ### ReactNDevTools used to track local/global state changes

    <div> 
        <img style = 'margin: 10px' src = '../app/src/content/Hooks_exp_3.gif' alt = 'hooks demo GIF' width = 50%/>
    </div>

## Key Implementation Features
### Each Checkbox slider manages its own state and can update the
    ~~~ js
    setGlobal({
        toggleTracker: [],
        count: 0,
    })
    ~~~
### Global state in one of two ways
    - `setGlobal` can be used to update toggleTracker
        ~~~ js
        setGlobal({ toggleTracker: [...toggleTracker, currentToggleState]});
        ~~~

    2. The updater function declared within the `MyCheckbox` component
    ~~~ js
    const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');
    ....
    setToggleTracker([...toggleTracker, currentToggleState]);
    ~~~


#### Configuration details
1) Set up React app `yarn create react-app app`

2)  Add Dependencies  
 `yarn add moment react-dom react-loader-spinner react-rainbow-components react-router-dom react-scripts react-spinners-kit reactn reactn-devtools semantic-ui-react styled-components`  

    - note  
        - For `react-loaded-spinner`, you must also add `styled-components`
        - For `semantic-ui-react`, you must also 
        add to `index.html`  
            ~~~ html 
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm semantic-ui@2.4.2/dist/semantic.min.css" />
            ~~~
        - For `reactn`, you must add 
            - this as the first line of `src/index.js`
                ~~~ js
                import { setGlobal } from 'reactn';
                 ~~~
            - before `ReactDOM.render` 
                ~~~ js
                import addReactNDevTools from 'reactn-devtools';
                ~~~
                addReactNDevTools();
                ~~~ js
                setGlobal({
                    toggleTracker: [],
                    count: 0,
                })
                ~~~

3)