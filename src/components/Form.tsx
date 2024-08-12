import { createPost } from "@/actions/createPostAction";

function Form() {
  return (
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
  );
}

export default Form;
