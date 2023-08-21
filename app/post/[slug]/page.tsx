import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
import { DUMMY_POSTS } from "@/data";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map(post => {
    return {
      slug: post.slug,
    };
  });
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = DUMMY_POSTS.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="flex gap-10 mt-10">
        <div className="relative">
          <div className="sticky top-20 flex flex-col gap-3">
            <SocialLink
              isShareUrl
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${
                "http://localhost:3000" + `/post/${post.slug}`
              }`}
            />
            <SocialLink
              isShareUrl
              platform="twitter"
              link={`https://www.facebook.com/sharer/sharer.php?u=${
                "http://localhost:3000" + `/post/${post.slug}`
              }`}
            />
            <SocialLink
              isShareUrl
              platform="whatsapp"
              link={`https://www.facebook.com/sharer/sharer.php?u=${
                "http://localhost:3000" + `/post/${post.slug}`
              }`}
            />
            <SocialLink
              isShareUrl
              platform="linkedin"
              link={`https://www.facebook.com/sharer/sharer.php?u=${
                "http://localhost:3000" + `/post/${post.slug}`
              }`}
            />
          </div>
        </div>
        <div className="h-[1200px] bg-slate-200 w-full ">post body</div>
      </div>
    </PaddingContainer>
  );
};

export default PostPage;
