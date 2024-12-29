import { act } from "@testing-library/react"

export type ThemeReduserType = {
    themeId: number
}

const initState: ThemeReduserType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeReduserType = initState, action: SetThemeIdAction): ThemeReduserType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

type SetThemeIdAction = {
    type: 'SET_THEME_ID';
    id: number;
  };

export const changeThemeId = (id: number): SetThemeIdAction => ({ type: 'SET_THEME_ID', id }) as const
