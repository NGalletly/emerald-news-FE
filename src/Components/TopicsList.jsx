import { useState, useEffect } from "react";
import { getTopics } from "../utils/getData";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";
import { Link } from "react-router-dom";

export default function TopicsList() {
  const { data, isLoading, error } = useLoadingErrorHook(getTopics);

  if (isLoading) {
    return <h1>Fetching the hottest topics...</h1>;
  }
  console.log(data.topics);
  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  const topics = data.topics || [];

  return (
    <div>
      <h1 className="pageHeader">Categories</h1>
      <main className="topicGrid">
        {topics.map((topic) => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              <div key={topic.slug} className="topicCard">
                <section className="topic_Card">
                  <h3>{topic.slug}</h3>
                  <img src={topic.img_url} alt="" />
                  <p>{topic.description}</p>
                </section>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
