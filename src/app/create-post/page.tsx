import Form from "@/components/Form";
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

      <Form />

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}

export default Page;
