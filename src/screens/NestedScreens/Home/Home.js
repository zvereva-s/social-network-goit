import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";

import useAuth from "../../../shared/hooks/useAuth";

import { authSignOut } from "../../../redux/auth/auth-operation";
// import { fetchPosts } from "../../../shared/api/api-posts";

import UserInfo from "./UserInfo/UserInfo";
import Container from "../../../shared/components/Container/Container";
import PostsList from "../../../shared/components/PostsList/PostsList";
import Icon from "../../../shared/components/Icon/Icon";

import { arrayPosts } from "./arrayPost";

export default function Home({ route, navigation }) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { email, login, photoURL: uri } = user;

  const { navigate } = navigation;
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          activeOpacity={0.8}
          onPress={() => {
            dispatch(authSignOut());
          }}
        >
          <Icon type="logout" focused={false} size="25" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    // fetchPosts(comments, setPosts, setComments);

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
