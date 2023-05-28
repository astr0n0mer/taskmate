"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import styles from "./Notes.module.css";
import { getManyNotes, pb, user } from "./PocketBase";

export default function NotesPage() {
  const [notes, setNotes] = useState<any[]>();

  useEffect(() => {
    async function getAllNotes() {
      const notes = await getManyNotes();
      setNotes(() => [...notes]);
    }
    getAllNotes();

    return () => pb.authStore.clear();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <p>
        Signed in as <b>{user?.record?.username}</b>
      </p>
      <CreateNote setNotes={setNotes} />
      <div className={styles.grid}>
        {notes?.length
          ? notes?.map((note: any) => <Note key={note.id} note={note} />)
          : "Loading..."}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
