import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const postData = useSelector(selectPostAndComments);
  console.log("postData:", postData);

  return (
    <div>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postData.post.title}</h1>
          <p className="meta">
            By <strong>{postData.post.developer.name}</strong> &bull;{" "}
            {moment(postData.post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
            <span className="tags">
              {postData.post.tags.map((tag) => {
                return <span key={tag.id}>{tag.tag}</span>;
              })}
            </span>
          </p>
          <ReactMarkdown source={postData.post.content} />

          <h2>Comments</h2>
          {postData.comments.rows.length === 0 ? (
            <p>
              <em>No comments left behind yet :(</em>
            </p>
          ) : (
            postData.comments.rows.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p className="meta">
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              );
            })
          )}
        </>
      )}
    </div>
  );
}
