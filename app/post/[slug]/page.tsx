import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
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
      {/* Container */}
      <div className="space-y-10">
        {/* Post HERO */}
        <PostHero post={post} />
        {/* Post Body & Social share */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="relative">
            <div className="sticky items-center top-20 flex md:flex-col gap-5">
              <div className="md:hidden font-medium">Share this content:</div>
              <SocialLink
                isShareUrl
                platform="facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareUrl
                platform="twitter"
                link={`https://www.twitter.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareUrl
                platform="whatsapp"
                link={`https://www.whatsup.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareUrl
                platform="linkedin"
                link={`https://www.linkedin.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        <CTACard />
      </div>
    </PaddingContainer>
  );
};

export default PostPage;
