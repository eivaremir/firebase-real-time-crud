import React, { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import UploadImage from "./components/UploadImage";
import firebase from "./util/firebase";
export default function App() {
  useEffect(() => {
    firebase.database().ref("Todo").child("user").update({
      online: true,
    });

    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      firebase.database().ref("Todo").child("user").update({
        online: false,
      });
    });
  }, []);

  return (
    <div
      className="App"
      onBeforeUnload={(e) => {
        e.preventDefault();
        alert("ah?");
      }}
    >
      <h1>Todo</h1>
      <Form />
      <TodoList />
      <UploadImage />
    </div>
  );
}
