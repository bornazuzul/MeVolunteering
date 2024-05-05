import React, { useContext } from "react";
import classes from "./DisplayNews.module.css";
import Button from "../UI/Button";
import { UserStatusContext } from "../../store/UserStatusProvider";

function DisplayNews(props) {
  const sortedNews = [...props.news].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const ctx = useContext(UserStatusContext);

  const importantClass = classes["news-item-header"] + " " + classes.important;
  const notImportantClass =
    classes["news-item-header"] + " " + classes["not-important"];

  return (
    <div className={classes["news-container"]}>
      {props.news.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {sortedNews.map((news) => (
            <div key={news.id} className={classes["news-item"]}>
              {news.important ? (
                <div className={importantClass}>
                  <h2>{news.title}</h2>
                  <p>{news.date.split("T")[0]}</p>
                </div>
              ) : (
                <div className={notImportantClass}>
                  <h2>{news.title}</h2>
                  <p>{news.date.split("T")[0]}</p>
                </div>
              )}
              <p className={classes.description}>{news.text}</p>
              <div className={classes["delete-button"]}>
                {ctx.userStatus === "admin" && (
                  // <Button
                  //   label="Delete"
                  //   onClick={() => props.deleteNews(news.id)}
                  //   type="red"
                  // />
                  <button className={classes.button} onClick={() => props.deleteNews(news.id)}>
                    <svg viewBox="0 0 448 512" className={classes.svgIcon}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default DisplayNews;
