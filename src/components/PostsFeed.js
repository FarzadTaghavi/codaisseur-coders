import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

import { fetchNext5Posts } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    if (posts.length < 5) {
      dispatch(fetchNext5Posts);
    }
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <p>
              {moment(post.createdAt).format("DD-MM-YYYY")}{" "}
              {post.tags.map((tag) => {
                return (
                  <React.Fragment key={tag.id}>
                    <span className="Tag">{tag.tag}</span>{" "}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}
