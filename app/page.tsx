import { redirect } from "next/navigation";

// The repository serves a single landing page; send the bare domain to it.
export default function Home() {
  redirect("/follicular-unit-extraction");
}
