import api from '../../services/api';

export const SET_FILMS = 'SET_FILMS';
const setFilms = films => ({
    type: SET_FILMS,
    films,
});

export const watchFilms = () => {
    return dispatch => {
        async function loadData() {
            try {
                const response = await api.get(`/films`);
                //console.log('dados:', response.data);
                const films = response.data;
                console.log('redux:', films);
                /*if (!films) {
					return dispatch(setFilms({}))
				}*/

                const action = setFilms(films);
                dispatch(action)
            } catch(error) {
                alert("Não foi possível carregar os dados redux!");
                return;
            }
        }
        loadData()
            
    }
}