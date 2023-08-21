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
  const category = DUMMY_POSTS.find(
    category => category.slug === params.category
  );
  const posts = DUMMY_POSTS.filter(
    post => post.category.title.toLocaleLowerCase() === params.category
  );

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>
      <PostLists posts={posts} />
    </PaddingContainer>
  );
};

export default CategoryPage;
