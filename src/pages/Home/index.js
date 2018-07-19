import React, { Component } from 'react'
import { Provider }         from 'react-redux'

import Store    from '../../store'
import TodoList from '../../componnents/TodoList'
import Counter  from '../../componnents/Counter'

class Home extends Component {
	render(){
		return(
			<Provider store={Store}>
				<div className="Home">
					<TodoList />
					<Counter />
				</div>
			</Provider>
		)
	}
}

export default Home;