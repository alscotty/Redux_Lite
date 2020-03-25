
const exampleAction = {
    type: 'change role',
    newRole: 'Student'
}

const genericReducer = (prevState={}, action) => {
    if (action.type === 'change role'){
        return action.newRole
    } else {
        return prevState;
    }

}

console.log(genericReducer({},exampleAction))