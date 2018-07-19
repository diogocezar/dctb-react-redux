import React, { Component, Fragment } from 'react'
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as TodoListActions from '../../actions/todo'

class TodoList extends Component {
	state = {
		newTodoText : ''
	}
	addNewTodo = () => {
		if(this.state.newTodoText === '')
			alert('Digite algo para inserir.')
		else{
			this.props.addTodo(this.state.newTodoText)
			this.setState({ newTodoText: '' })
		}
	}
	removeTodo = (id) =>{
		this.props.removeTodo(id)
	}
	render() {
		return (
			<Fragment>
				<ul>
					{ this.props.todos.map(todo => (
						<li key={todo.id}>{todo.text} - <button onClick={(e) => this.removeTodo(todo.id)}>Remover</button></li>
					))}
				</ul>
				<input
					type="text" value={this.state.newTodoText}
					onChange={(e) => this.setState({ 'newTodoText' : e.target.value})} />
				<button onClick={this.addNewTodo}>Novo</button>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)