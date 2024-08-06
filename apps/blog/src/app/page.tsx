import PostList from "@/app/components/PostList";
import { getBlogPosts } from "@/utils/getBlogPosts";

const Page = () => {
  const posts = getBlogPosts();

  return (
    <main className="flex justify-center">
      <section className="max-w-screen-md w-full">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default Page;
