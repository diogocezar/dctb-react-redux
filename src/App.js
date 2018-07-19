import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'
import TodoList from './componnents/TodoList'

class App extends Component {
	render(){
		return(
			<Provider store={store}>
				<div className="app">
					<TodoList />
				</div>
			</Provider>
		)
	}
}

export default App;