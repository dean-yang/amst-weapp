import { GETCARE } from '../constants/firstClass'


export default function firstClass (state = [], action) {
  if (action.type === GETCARE ) {
    return action.payload
  }else{
    return state
  }
}
