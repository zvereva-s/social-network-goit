import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import useAuth from "../../../shared/hooks/useAuth";
import useNavigateButton from "../../../shared/hooks/useNavigateButton";

import { authSignOut } from "../../../redux/auth/auth-operation";
import { fetchPosts } from "../../../shared/api/api-posts";

import UserInfo from "./UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";
import PostsList from "../../../shared/components/PostsList/PostsList";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";

export default function Home({ route, navigation }) {
  const dispatch = useDispatch();

  const { user } = useAuth();
  const { email, login, photoURL: uri } = user;

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    dispatch(authSignOut());
  };
  const { handleNavigateButton } = useNavigateButton({
    navigation,
    func: handleLogout,
    where: "headerRight",
    icon: "logout",
  });

  const asyncHandleFetchingPost = async () => {
    try {
      setLoading(true);
      await fetchPosts(setPosts, setComments, comments);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    handleNavigateButton();
  }, [navigation]);

  useEffect(() => {
    asyncHandleFetchingPost();

    return () => {
      setComments([]);
      setPosts([]);
    };
  }, []);

  return (
    <>
      <Container>
        <UserInfo
          uri={uri}
          login={login}
          email={email}
          navigation={navigation}
        />
        <PostsList posts={posts} comments={comments} navigation={navigation} />
      </Container>
      {loading && <Spinner bool="false" size="large" color="grey" />}
      {error && <Notification type="error" text={error.message} />}
    </>
  );
}
