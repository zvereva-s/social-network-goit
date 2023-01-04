import db from "../../firebase/config";
export async function fetchPosts(setPosts, setComments, comments) {
  try {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot(({ docs }) => {
        setPosts(
          docs.map((doc) => {
            fetchingCollection(setComments, doc.id);
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      });
  } catch (error) {
    console.log(
      `%c[Error - fetchPosts(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}

export async function getUserPosts(setComments, setPosts, userId) {
  try {
    await db
      .firestore()
      .collection("posts")
      .where("userID", "==", userId)
      .onSnapshot(({ docs }) => {
        setPosts(
          docs
            .map((doc) => {
              fetchingCollection(setComments, doc.id);
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
            .sort((firstPost, lastPost) => lastPost.date - firstPost.date)
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

export async function postPost(obj) {
  try {
    await db
      .firestore()
      .collection("posts")
      .add({
        ...obj,
        date: Date.now(),
      });
  } catch (error) {
    console.log(
      `%c[Error - uploadPostToServer(): ${error.message}]`,
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
              comments: docs.map((doc) => doc.data()),
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
