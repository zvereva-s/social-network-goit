import db from "../../firebase/config";

export async function fetchPostComments(setComments, id) {
  try {
    await db
      .firestore()
      .collection("posts")
      .doc(id)
      .collection("comments")
      .onSnapshot(({ docs }) => {
        setComments(
          docs
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
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
export async function handleComment(setComment) {
  try {
    await db
      .firestore()
      .collection("posts")
      .doc(id)
      .collection("comments")
      .add({ comment, login, date, dateID: Date.now(), photoURL });
    setComment("");
  } catch (error) {
    console.log(
      `%c[Error - handleComment(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}
