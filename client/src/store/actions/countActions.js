import { countActions } from '../reducers/countReducers';

// changeCount 액션 생성자 함수
// type 파라미터를 받아서 INCREASE일 때는 count를 1 증가, 그 외에는 1 감소
export const changeCount = (type) => (dispatch, getState) => {
  // 현재 Redux 상태(store)에서 count 객체를 가져옴
  const { count } = getState();

  // type 값에 따라 증가 또는 감소 액션을 dispatch함
  if (type === 'INCREASE') {
    dispatch(countActions.countChange(count.number + 1));
  } else {
    dispatch(countActions.countChange(count.number - 1));
  }
};
