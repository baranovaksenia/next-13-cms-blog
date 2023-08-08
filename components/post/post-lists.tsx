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
    <div className="grid grid-cols-2 gap-10">
      {posts.map(post => (
        <PostCard post={post} layout={layout} key={post.id} />
      ))}
    </div>
  );
}
