export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

export function getAllPosts() {
    return (dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json)
        .then(data => {
            dispatch({type: 'GET_ALL_POSTS', payload: data})
        })
    }
}

var idPost = 0;
export function getAllCommentsPost(id) {
    return (dispatch) => {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json)
        .then(data => { 
            idPost++;
            const arrayComments = data.map((comments) => {
                return {
                    body: comments.body,
                    id: idPost
                }
            })
            dispatch({type: 'GET_ALL_COMMENTS_POST', payload: arrayComments})
        })
    }
}


export function getAllUsersPosts(id) {
    return (dispatch) => {
        return fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json)
        .then(data => {
            dispatch({type: 'GET_ALL_USERS_POST', payload: data })
        })
    }
}

export function getAllUsers() {
    return (dispatch) => {
         return fetch("https://jsonplaceholder.typicode.com/users")
         .then(response => response.json())
         .then(data => {
            const arrayUsers = data.map((user) => {
              return {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
              }
            })
            dispatch({type: 'GET_ALL_USERS', payload: arrayUsers})
          })
      };
    }