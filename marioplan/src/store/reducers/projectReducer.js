const initState = {directProjects: []}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_MEMBERS_FROM_FIREBASE':
      console.log('in GET_MEMBERS_FROM_FIREBASE ', action.payload)
      return {...state, directProjects: action.payload};
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    case 'UPDATE_PROJECT_SUCCESS':
      console.log('update project success');
      return {...state};
    case 'UPDATE_PROJECT_ERROR':
      console.log('update project error');
      return state;
    case 'DELETE_PROJECT_SUCCESS':
      console.log('delete project success');
      return {...state, directProjects: state.directProjects.filter(i => i.id !== action.payload)};
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;