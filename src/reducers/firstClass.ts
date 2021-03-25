import { FIRSTCLASS } from '../constants/firstClass'


export default function firstClass (state = [], action) {
  if (action.type === FIRSTCLASS ) {
    return action.payload
  }else{
    return state
  }
}
