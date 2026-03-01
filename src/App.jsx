import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";
import ArticlesList from "./Components/ArticlesList";
import TopicsList from "./Components/TopicsList";
import SelectedArticle from "./Components/SelectedArticle";
import TopicsArticles from "./Components/TopicsArticles";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles/:article_id" element={<SelectedArticle />} />
          <Route path="topics/:topics_id" element={<TopicsArticles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navbar />
      </div>
    </>
  );
}

export default App;
