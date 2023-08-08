import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import { PostCard } from "@/components/post/post-card";
import PostLists from "@/components/post/post-lists";
import { DUMMY_POSTS } from "@/data";

import React from "react";

const Home = () => {
  return (
    <PaddingContainer>
      {/* space between components */}
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostLists posts={DUMMY_POSTS.filter((_post, i) => i > 0 && i < 3)} />
        <PostCard reverse post={DUMMY_POSTS[3]} />
        <PostLists posts={DUMMY_POSTS.filter((_post, i) => i > 3 && i < 6)} />
        <CTACard />
      </main>
    </PaddingContainer>
  );
};

export default Home;
