const TEST = 'TEST'

export const test = (value) => ({ 
    type: TEST,
    value: value
 })

const initialState = {
    value: 'initialState',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return { value: action.value }
        default:
            return { value: 'default' }
    }
}