import Immutable from 'seamless-immutable'
import { FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from 'store/actions/data.actions'

const initialState = Immutable.from({ text: '' })

const fetchDataFailHandler = ({ state, payload }) => ({ ...state, payload })

const fetchDataSuccessHandler = ({ payload }) => Immutable.from(payload)

const dataReducerHandlers = {
  [FETCH_DATA_FAIL]: fetchDataFailHandler,
  [FETCH_DATA_SUCCESS]: fetchDataSuccessHandler,
}

export default (state = initialState, action) => {
  const { payload, type } = action
  const reducerHander = dataReducerHandlers[type]
  return reducerHander ? reducerHander({ state, payload }) : state
}
