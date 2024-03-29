# Hooks Experiment #3
## Controlled components interacting with global state managed with ReactN

## Hooks Implmentation Features
- ### Button toggle state with conditionally rendered styles
- ### Checkbox as slider using label prop 
- ### Checkbox state appends status to global state and adds to count
- ### Logged state changes rendered using layered styling to indicae last Card that was updated
- ### ReactNDevTools used to track local/global state changes

    <div> 
        <img style = 'margin: 10px' src = './app/src/content/hooks_exp_3.gif' alt = 'hooks demo GIF' width = 90% />
    </div>

## Key Implementation Features
### Each Checkbox slider manages its own state and can log changes to the `toggleTracker` global state variable  
    ~~~ js            
        setGlobal({
            toggleTracker: [],
            count: 0,
        })
    ~~~            


### The Checkbox slide updates Global state using the `handleSliderValue` handler in one of two ways:
1) `setGlobal` can be used to update `toggleTracker`
    ~~~js
        setGlobal({ toggleTracker: [...toggleTracker, currentToggleState]});
    ~~~
2) The `setToggleTracker` updater function declared within the `MyCheckbox` component
    ~~~ js
        const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');
        ...
        setToggleTracker([...toggleTracker, currentToggleState]);
    ~~~

### Similarily, the `resetLogger` helper function can update the Global State in one of two ways:
1) `setGlobal` can be used to update toggleTracker
    ~~~js
        setGlobal({
        toggleTracker: [],
        count: 0,
        })
    ~~~
2) The `setToggleTracker`  & `setCount` updater functions declared within the `App` component
    ~~~ js
        const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');
        const [count, setCount] = useGlobal('count');
        ...
        setToggleTracker([]);    // this can used similarly to setGlobal
        setCount(0);
    ~~~

## Important Configuration details
1) ### Set up React app `yarn create react-app app`

2) ### Add Dependencies  
    `yarn add moment react-dom react-loader-spinner react-rainbow-components react-router-dom react-scripts react-spinners-kit reactn redux reactn-devtools redux        semantic-ui-react styled-components`  

    - For `react-loaded-spinner`, you must also add `styled-components`
    - For `semantic-ui-react`, you must also 
        add to `index.html`  
        ~~~ html 
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm semantic-ui@2.4.2/dist/semantic.min.css" />
        ~~~
    - Inside of of `src/index.js`, you must add this as the first line in order to properly initialize `Global state`
        ~~~ js
        import { setGlobal } from 'reactn';
        ~~~
        Next, add the following to access `ReactN DevTools` the `Redux DevTools extension` 
        ~~~ js
        import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();
        ~~~
        This will allow tracking of state changes in `Chrome`
        <div> 
            <img style = 'margin: 10px' src = './app/src/content/ReduxReactNDevTools.png' alt = 'hooks demo GIF' width = 90% />
        </div>
        
        It is recommended to initialie `Global State` before `ReactDOM.render`
        ~~~ js
        setGlobal({
            toggleTracker: [],
            count: 0,
        })
        ~~~
3) `Inline CSS` is easy to manage and styles can also be combined using the `spread operator`. 
    ~~~ js
    const alignStyles = {width: '80%', margin: '5px auto', padding: '5px', display: 'flex', alignItems: 'center'}                    
    const cardStyles = {border: '1px solid darkslategray', borderRadius: '4px', color: 'dodgerblue', ...alignStyles}
    ~~~

4) `Semantic UI React` props can be conditionally rendered
~~~
    <Button negative = {item.state} positive = {!item.state}>  State: {!item.state ? 'True' : 'False'} </Button>    
~~~

5) `Semantic UI React` props can be overridden if the component is surrounded by a simple `div` tag that has a className defined in a traditional CSS file.
    ~~~ jsx
        <div className = 'card'  >
            <Card style = {testStyles}  key = {index}>
              <div style = {divStyles}>
                <Button style = {buttonFormat} >  Toggle: {item.name.itemProp} </Button>  
              </div>
              <div style = {divStyles}>
                <Button style = {!item.state ? buttonTrue : buttonFalse} >  State: {!item.state ? 'True' : 'False'} </Button>    
              </div>            
            </Card>
        </div>
    ~~~
    Using a CSS file also allows the usage of `pseudo-selectors` such as `last-child` to show the most recent state change that was added to the global variable `toggleTracker`.
    ~~~ css
    .card:last-child{
        background-color: dodgerblue;
        margin: '2px'; 
    }
    ~~~
    ~~~ css
    .card:hover{
        background-color: deeppink;
    }
    ~~~



