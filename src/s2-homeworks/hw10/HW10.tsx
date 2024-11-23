import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType, RootState} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
DONE * 1 - в файле loadingReducer.ts дописать типы и логику
DONE * 2 - получить isLoading из редакса
DONE * 3 - дописать функцию setLoading
DONE * 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    const isLoading = useSelector((state: RootState)=>state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 1500)
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                        xType='default'
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
