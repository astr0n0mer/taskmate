"use client";

import { useState } from "react";
import { createOneNote } from "./PocketBase";

export default function CreateNote({ setNotes }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    const newNote = await createOneNote({ title, content });
    setNotes((prevNotes: any) => [...prevNotes, newNote]);

    alert("Note created successfully.");
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Create a new note</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={content}
        onChange={(e: any) => setContent(e.target.value)}
      />
      <button type="submit">Create Note</button>
    </form>
  );
}
