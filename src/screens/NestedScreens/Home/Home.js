import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import useAuth from "../../../shared/hooks/useAuth";
import useNavigateButton from "../../../shared/hooks/useNavigateButton";

import { authSignOut } from "../../../redux/auth/auth-operation";
import { fetchPosts } from "../../../shared/api/api-posts";

import UserInfo from "./UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";
import PostsList from "../../../shared/components/PostsList/PostsList";

import { arrayPosts } from "./arrayPost";

export default function Home({ route, navigation }) {
  const dispatch = useDispatch();

  const { navigate } = navigation;

  const { user } = useAuth();
  const { email, login, photoURL: uri } = user;

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const handleLogout = () => {
    dispatch(authSignOut());
  };
  const { handleNavigateButton } = useNavigateButton({
    navigation,
    func: handleLogout,
    where: "headerRight",
    icon: "logout",
  });

  useLayoutEffect(() => {
    handleNavigateButton();
  }, [navigation]);

  useEffect(() => {
    fetchPosts(comments, setPosts, setComments);

    return () => {
      setComments([]);
      setPosts([]);
    };
  }, []);

  return (
    <Container>
      <UserInfo uri={uri} login={login} email={email} />
      <PostsList posts={arrayPosts} navigation={navigation} />
    </Container>
  );
}
