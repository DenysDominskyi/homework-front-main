import { act } from "@testing-library/react"

const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): State => {
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type State = typeof initState

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
