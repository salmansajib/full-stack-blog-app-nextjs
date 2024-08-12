import { createPost } from "@/actions/createPostAction";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function Page() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/create-post");
  }

  return (
    <main className=" text-center pt-16 ">
      <h1 className=" text-4xl md:text-5xl font-bold mb-5 ">Create post</h1>

      <form
        action={createPost}
        className=" flex flex-col gap-2 max-w-[400px] mx-auto my-10 "
      >
        <input
          className=" h-10 border rounded px-3 "
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <textarea
          name="body"
          placeholder="Body content for new post"
          required
          className="border rounded px-3 py-2"
          rows={6}
        />
        <button className=" h-10 bg-blue-500 px-5 rounded text-white ">
          Submit
        </button>
      </form>

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}

export default Page;
