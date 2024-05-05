import React from "react";
import AddNews from "../Components/newsPage/AddNews";
import DisplayNews from "../Components/newsPage/DisplayNews";
import classes from "./NewsPage.module.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function NewsPage() {
  const [news, setNews] = useState([]);

  const getNews = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/news.json"
      );
      const data = response.data;

      const newNews = [];
      for (const key in response.data) {
        const news = {
          id: key,
          ...data[key],
        };
        newNews.push(news);
      }
      setNews(newNews);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getNews();
  }, [getNews]);

  const deleteNews = async (id) => {
    try {
      await axios.delete(
        `https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/news/${id}.json`
      );
      setNews((prevNews) => prevNews.filter((news) => news.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addNews = async (news) => {
    try {
      const response = await axios.post(
        "https://volunteering-b71e0-default-rtdb.europe-west1.firebasedatabase.app/news.json",
        news
      );
      const data = response.data;
      const newNews = {
        id: data.name,
        ...news,
      };
      setNews((prevNews) => [...prevNews, newNews]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes["news-page"]}>
      <DisplayNews news={news} deleteNews={deleteNews} />
      <AddNews addNews={addNews} />
    </div>
  );
}

export default NewsPage;
