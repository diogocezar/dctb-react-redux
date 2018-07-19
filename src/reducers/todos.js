export default function todos(state = [], action){
	console.log(state)
	switch(action){
		case 'ADD_TODO':
			return [1,2,3]
			//return [ ...state, { id: Math.random(), text: action.text}]
		default:
			return state
	}
}