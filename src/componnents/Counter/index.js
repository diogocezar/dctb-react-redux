import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as TodoListActions from '../../actions/todo'

class Counter extends Component {
	render() {
		return (
			<Fragment>
				<h1>{`Temos um total de ${this.props.todos.length} registros`}</h1>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)