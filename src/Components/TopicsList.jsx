import { useState, useEffect } from "react";
import { getTopics } from "../utils/getData";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";

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
      <h1>topics</h1>
      <main>
        {topics.map((topic) => {
          return (
            <section key={topic.slug} className="topic_Card">
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </section>
          );
        })}
      </main>
    </div>
  );
}
