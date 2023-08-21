import { Post } from "@/types/collection";
import React from "react";
import { PostCard } from "./post-card";

interface PostListsProps {
  posts: Post[];
  layout?: "horizontal" | "vertical";
}
export default function PostLists({
  posts,
  layout = "vertical",
}: PostListsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr gap-10">
      {posts.map(post => (
        <PostCard post={post} layout={layout} key={post.id} />
      ))}
    </div>
  );
}
