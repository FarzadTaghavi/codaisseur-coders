import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ToolBar from "./components/ToolBar";
import BlogPosts from "./pages/BlogPosts";
import Developers from "./pages/Developers";
import LoginPage from "./components/LoginPage";

import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState);
  }, [dispatch]);

  return (
    <div>
      <ToolBar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/blogposts" component={BlogPosts} />
        <Route path="/developers" component={Developers} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
