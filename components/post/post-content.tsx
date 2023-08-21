import { Post } from "@/types/collection";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import { getReadingTime, getRelativeData } from "@/lib/helpers";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
}

export const PostContent = ({ post, isPostPage = false }: PostContentProps) => {
  return (
    <div className="">
      {/* tags */}
      <div
        className={`flex items-center flex-wrap gap-2  text-neutral-400 ${
          isPostPage ? "text-sm " : "text-xs @md:text-sm"
        }`}
      >
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getRelativeData(post.date_created)}</div>
      </div>
      {/* title */}
      <h2
        className={` ${
          isPostPage
            ? "text-2xl md:text-3xl lg:text-4xl font-bold"
            : "@lg:text-3xl @md:text-2xl text-xl font-medium"
        }`}
      >
        {post.title}
      </h2>
      {/* description */}
      <p className="text-base @lg:text-lg leading-snug text-neutral-600">
        {post.description}
      </p>
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          Read More <AiOutlineArrowRight size={16} />
        </div>
      )}
    </div>
  );
};
