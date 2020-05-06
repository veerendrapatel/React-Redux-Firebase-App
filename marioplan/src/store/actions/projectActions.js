import firebase from '../../config/fbConfig.js';
export const listMembers = () => {
  return (dispatch) => {
    console.log('inside ListMembers');
    firebase.firestore().collection('projects').onSnapshot(function(querySnapshot) {
      const members = [];
      querySnapshot.forEach((doc) => {
        members.push({...doc.data(), id: doc.id});
      });
      console.log('listMembers action', members);
      dispatch({type: 'GET_MEMBERS_FROM_FIREBASE', payload: members});
    });
  }
};
export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    // .then((docRef) => {
    //   firestore.collection('projects').doc(docRef.id).update({
    //     ...project,
    //     authorFirstName: profile.firstName,
    //     authorLastName: profile.lastName,
    //     authorId: authorId,
    //     projectId: docRef.id,
    //     updatedAt: new Date()
    //   })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      //})
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

export const updateProject = (project) => {
  let id = project.id;
  delete project.id;
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').doc(id).update({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      updatedAt: new Date()
    }).then(() => {
      dispatch({ type: 'UPDATE_PROJECT_SUCCESS', payload:  project});
    }).catch(err => {
      dispatch({ type: 'UPDATE_PROJECT_ERROR' }, err);
    });
  }
};
export const deleteProject = (projectId) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('projects').doc(projectId).delete().then(() => {
      dispatch({ type: 'DELETE_PROJECT_SUCCESS', payload: projectId });
    }).catch(err => {
      dispatch({ type: 'DELETE_PROJECT_ERROR' }, err);
    });
  }
};