import db from "../../firebase/config";

export async function fetchPostComments(setComments, id) {
  try {
    await db
      .firestore()
      .collection("posts")
      .doc(id)
      .collection("comments")
      .onSnapshot(({ docs }) => {
        return setComments(
          docs
            .map((doc) => {
              return {
                ...doc.data(),
                id: doc.id,
              };
            })
            .sort((firstPost, lastPost) => lastPost.dateID - firstPost.dateID)
        );
      });
  } catch (error) {
    console.log(
      `%c[Error - fetchPostComments(): ${error.message}]`,
      "color: #F44336;"
    );
    throw error;
  }
}
export async function handleComment(id, obj) {
  await db
    .firestore()
    .collection("posts")
    .doc(id)
    .collection("comments")
    .add({ ...obj, dateID: Date.now() });
}
