const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_TODOS_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_TODOS_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TODO':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
