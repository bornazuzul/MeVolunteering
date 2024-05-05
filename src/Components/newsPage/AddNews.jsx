import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./AddNews.module.css";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function AddNews(props) {
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showErrorTitle, setShowErrorTitle] = useState(false);
  const [showErrorDescription, setShowErrorDescription] = useState(false);

  const handleOpenCloseNewsForm = () => {
    setShowNewsForm((currentState) => !currentState);
  };

  const handleAddNews = (e) => {
    e.preventDefault();

    if (title.trim().length === 0 || description.trim().length === 0) {
      setShowError(true);
      return;
    }

    if (title.length > 20) {
      setShowErrorTitle(true);
      return;
    }

    if (description.length > 200 || description.length < 10) {
      setShowErrorDescription(true);
      return;
    }
    submitNewNews();
  };

  const submitNewNews = () => {
    setShowError(false);
    setShowErrorTitle(false);
    setShowErrorDescription(false);
    const news = {
      date: new Date().toISOString(),
      title,
      text: description,
      important,
    };
    props.addNews(news);
    setTitle("");
    setDescription("");
    setImportant(false);
    setShowNewsForm(false);
  };

  return (
    <>
      <div className={classes["new-news-btn"]}>
        {/* <Button
          onClick={handleOpenCloseNewsForm}
          label="New notification"
          type="yellow"
        /> */}
        <button className={classes["Btn"]} onClick={handleOpenCloseNewsForm}>
          <div className={classes["sign"]}>+</div>
          <div className={classes["text"]}>Notification</div>
        </button>
      </div>
      {showNewsForm && (
        <Modal closeCustomize={handleOpenCloseNewsForm}>
          <div className={classes["new-news-form"]}>
            <h2>Add notification</h2>
            {showError && <p>Fill in all feilds</p>}
            <form className={classes.form}>
              <TextField
                label={"Title"}
                type="text"
                error={showErrorTitle}
                helperText={
                  showErrorTitle
                    ? "Title can have maximum of 20 characters"
                    : ""
                }
                variant="standard"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                label={"Descriptions"}
                error={showErrorDescription}
                helperText={
                  showErrorDescription
                    ? "Desctiption must have at least 10 characters"
                    : ""
                }
                type="text"
                variant="standard"
                fullWidth
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={important}
                    onChange={(e) =>
                      setImportant((currentState) => !currentState)
                    }
                  />
                }
                sx={{ width: "100%" }}
                label="Important"
              />
              <Button
                label="Add"
                onClick={handleAddNews}
                type="yellow"
              />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default AddNews;
