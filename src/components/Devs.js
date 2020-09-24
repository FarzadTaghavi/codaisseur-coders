import React, { useEffect } from "react";
import { fetchNext5Devs } from "../store/developers/actions";
import { useDispatch, useSelector } from "react-redux";

import { selectDevs } from "../store/developers/selectors";
import { selectFeedLoading } from "../store/feed/selectors";

export default function Devs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNext5Devs);
  }, [dispatch]);

  const devs = useSelector(selectDevs);
  const loading = useSelector(selectFeedLoading);

  return (
    <div>
      {devs.map((dev) => {
        return (
          <div key={dev.id}>
            <p>
              <strong>Name:</strong> {dev.name}
            </p>
            <p>
              <strong>Github username:</strong> {dev.github_username}
            </p>
            <p>
              <strong>Email address:</strong> {dev.email}
            </p>
            <br></br>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading developers...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Devs)}>Load more</button>
        )}
      </p>
    </div>
  );
}
