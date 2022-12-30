import db from "../../firebase/config";

export async function fetchPosts(comments, setComments, setPosts) {
  try {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot(({ docs }) => {
        docs.map((doc) => {
          db.firestore()
            .collection("posts")
            .doc(doc.id)
            .collection("comments")
            .onSnapshot(({ docs }) => {
              const arr = [];
              docs.map((doc) => arr.push(doc.data()));
              setComments((prevState) => {
                return [
                  ...prevState,
                  { id: doc.id, commentNumber: docs.length, comments: arr },
                ];
              });
            });
          comments.map((item) => {
            setPosts((prevState) => {
              return [
                ...prevState,
                {
                  id: doc.id,
                  ...doc.data(),
                  comment: item.id === doc.id && item.commentNumber,
                },
              ]
                .filter(
                  (post, indx, arr) =>
                    post.comment !== false && arr.indexOf(post) === indx
                )
                .sort((firstPost, lastPost) => lastPost.date - firstPost.date);
            });
          });
        });
      });
  } catch (error) {
    console.log(
      `%c[Error - fetchPosts(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}

export async function getUserPosts(comments, setComments, setPosts, userId) {
  try {
    await db
      .firestore()
      .collection("posts")
      .where("userID", "==", userId)
      .onSnapshot(({ docs }) => {
        docs.map((doc) => {
          fetchingCollection(setComments, doc.id);
        });

        comments.map((comment) =>
          setPosts(
            docs
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
                commentNumber:
                  doc.id === comment.id ? comment.commentNumber : 0,
              }))
              .sort((firstPost, lastPost) => lastPost.date - firstPost.date)
          )
        );
      });
  } catch (error) {
    console.log(
      `%c[Error - getUserPosts(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}

async function fetchingCollection(setComments, id) {
  try {
    await db
      .firestore()
      .collection("posts")
      .doc(id)
      .collection("comments")
      .onSnapshot(({ docs }) => {
        setComments((prevState) => {
          return [
            ...prevState,
            {
              id,
              commentNumber: docs.length,
            },
          ];
        });
      });
  } catch (error) {
    console.log(
      `%c[Error - fetchingCollection(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}

//TODO
/* 
1. Получить массив обьектов Постов. В каждом обьекте Поста  есть массив объектов Комментариев.
2. Post obj
  {
    date (for sort)
    locationCoords: {
      latitude,
      longtitude
      }
    locationName
    login
    name
    photo (post image)
    userID
    comments: []
    likes
  }
3. Comment obj
    {
    comment
    date (txt)
    dateID (for sort)
    login
    photoURL (of user)
    }
  
4. Создать пост - создать обьект, отправить на базу, добавить в массив локально
5. Создать коммент - создать обьект, отправить на базу, добавить в массив локально соответственному Посту по id
6. Profile screen - отбирать с массива Posts - по userId массив постов. 
*/

/*
export async function fetchPosts(setPosts) {
  try {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot(({ docs }) => {
        docs.map((doc) => {
          const comments = fetchComments(doc.id);
          setPosts((prevState) =>
            [
              ...prevState,
              {
                ...doc.data(),
                id: doc.id,
                comments,
              },
            ].sort((firstPost, lastPost) => lastPost.date - firstPost.date)
          );
        });
      });
  } catch (error) {
    console.log(
      `%c[Error - fetchPosts(): ${error.message}]`,
      "color: #F44336;"
    );
    throw error;
  }
}
async function fetchComments(id) {
  try {
    const snapshot = await db
      .firestore()
      .collection("posts")
      .doc(id)
      .collection("comments")
      .get();
    const comments = snapshot.docs.map((doc) => ({ ...doc.data() }));
    return comments;
  } catch (error) {
    console.log(
      `%c[Error - fetchComments(): ${error.message}]`,
      "color: #F44336;"
    );
    throw error;
  }
}
*/
Footer;
