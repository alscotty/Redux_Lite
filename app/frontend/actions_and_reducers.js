
const exampleAction = {
    type: 'change role',
    newRole: 'Student'
}

const requestRoles = {
    type: 'request roles',
    roles: ['Student','Teacher', 'Janitor']
}

const genericReducer = (prevState={}, action) => {
    if (action.type === 'change role'){
        return action.newRole
    } else if (action.type == 'request roles') {
        return action.roles
    } else {
        return prevState;
    }

}

console.log(genericReducer({},exampleAction))