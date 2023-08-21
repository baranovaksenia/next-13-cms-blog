import PaddingContainer from "@/components/layout/padding-container";
import PostLists from "@/components/post/post-lists";
import { DUMMY_POSTS } from "@/data";

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map(category => {
    return {
      category: category.slug,
    };
  });
};
const CategoryPage = ({ params }: { params: { category: string } }) => {
  const posts = DUMMY_POSTS.filter(
    post => post.category.title.toLocaleLowerCase() === params.category
  );

  return (
    <PaddingContainer>
      <PostLists posts={posts} />
    </PaddingContainer>
  );
};

export default CategoryPage;
