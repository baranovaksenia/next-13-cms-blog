import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostContent } from "./post-content";

interface PostCardProps {
  post: Post;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
}
export const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostCardProps) => {
  return (
    <Link
      className={` ${
        layout === "horizontal"
          ? "grid md:grid-cols-2 items-center gap-10"
          : "space-y-10"
      }
	  `}
      href={`/post/${post.slug}`}
    >
      {/* post image */}
      <Image
        className={`rounded-md w-full object-cover object-center max-h-[300px] ${
          reverse ? "order-last" : ""
        }`}
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />
      {/* post content */}
      <PostContent post={post} />
    </Link>
  );
};
