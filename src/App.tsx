import React, {useReducer} from "react";
import { Header, Footer } from './components'
import Home from "./pages/Home";
import { ContextApp, initialState } from "./stateManager/store";
import { changeReducer } from "./stateManager/reducer";



const App: React.FC = () => {

    const mainReducer = (state: any, action: any) => changeReducer(state, action);
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <ContextApp.Provider value={{state, dispatch}}>
          <div className="wrapper">
              <Header/>
              <main className="main">
                  <div className="container">
                      <Home />
                  </div>
              </main>
              <Footer/>
          </div>
    </ContextApp.Provider>
};

export default App;
