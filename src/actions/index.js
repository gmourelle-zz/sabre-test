// export const Actions = {
//     GET_POSITIONS: 'GET_POSITIONS',
//     SEARCH_SAVE: 'SEARCH_SAVE'
// };
import { Actions } from './../constants/actionTypes';

const get_Positions = payload => ({ type: Actions.GET_POSITIONS, payload });
const search_Action = payload =>({  
    type: Actions.SEARCH_SAVE,
    payload: payload    
});
const url='../data/fakeData.json';

export const getPositions = () =>{

    return dispatch =>{        
        return fetch(url).then(
            data => ( data.json())            
        ).then(position_data => {              
                dispatch(get_Positions(position_data));
            });
    };
};

export const searchAction = search =>{

    return dispatch => {
        dispatch(search_Action(search));
    };
};

// export function searchAction(search) {

//     return dispatch => {
//         dispatch(search_Action(search));
//     };
// };