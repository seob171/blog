import PostList from '@/app/components/PostList';
import { getBlogPosts } from '@/utils/getBlogPosts';

const Page = () => {
  const posts = getBlogPosts();

  return (
    <div className="flex flex-1 my-8">
      <PostList posts={posts} />
    </div>
  );
};

export default Page;
