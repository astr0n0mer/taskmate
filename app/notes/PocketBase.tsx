import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");
export let user: any;

async function authenticateUser() {
  user = await pb
    .collection("users")
    .authWithPassword(
      process.env.NEXT_PUBLIC_POCKETBASE_USER_EMAIL || "",
      process.env.NEXT_PUBLIC_POCKETBASE_USER_PASSWORD || ""
    );
}

export async function getOneNote(id: string) {
  await authenticateUser();
  const record = await pb.collection("notes").getOne(id);
  return record;
}

export async function getManyNotes(page: number = 1, perPage: number = 30) {
  await authenticateUser();
  const records = await pb.collection("notes").getList(page, perPage);
  return records?.items;
}

export async function createOneNote(note: object) {
  await authenticateUser();
  const record = await pb.collection("notes").create(note);
  return record;
}
