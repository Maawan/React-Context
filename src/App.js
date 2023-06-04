import React , {Fragment} from 'react'
import Provider from './provider'
import Context from "./context"

function Agents(){
    return <AgentOne />
}

function AgentOne(){
    return <AgentTwo />
}

function AgentTwo(){
    return <AgentBond />
}

function AgentBond(){
    return(
        <Context.Consumer>
            {
                (context) => (
                    <Fragment>
                        <h3>Agent Information</h3>
                        <p>Mission Name {context.data.mname}</p>
                        <h2>Mission Status {context.data.accept}</h2>
                        <button onClick={context.isMissionAccepted}>Choose to click</button>
                    </Fragment>
                )
            }
        </Context.Consumer>
    )
}

function App(){
    return(
        <div>
            <h1>Context Api</h1>
            <Provider>
                <Agents />
            </Provider>
        </div>
    )
}
export default App;