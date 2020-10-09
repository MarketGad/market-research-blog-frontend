import React from 'react'
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from './Main'

const store = ConfigureStore();
class App extends React.Component{
	
	render(){
		return(
            <Provider store={store}>
                <BrowserRouter>
			        <Main/>
                </BrowserRouter>
            </Provider>
		)
	}
}

export default App;