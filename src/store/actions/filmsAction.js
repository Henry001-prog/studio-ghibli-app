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
                const films = response.data;
                console.log('redux:', films);
                const action = setFilms(films);
                dispatch(action)
            } catch(error) {
                alert("Não foi possível carregar os dados!");
                return;
            }
        }
        loadData()
            
    }
}