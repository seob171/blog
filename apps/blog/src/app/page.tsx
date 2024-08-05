import { getPostList } from "@/utils/getPostList";
import PostList from "@/app/components/PostList";

const Page = () => {
  const postList = getPostList();

  return (
    <main className={"flex justify-center"}>
      <section className={"max-w-screen-md w-full"}>
        <PostList data={postList} />
      </section>
    </main>
  );
};

export default Page;
