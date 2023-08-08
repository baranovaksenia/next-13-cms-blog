import { Post } from "@/types/collection";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import { getReadingTime, getRelativeData } from "@/lib/helpers";

interface PostContentProps {
  post: Post;
}

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="">
      {/* tags */}
      <div className="flex items-center gap-1 text-sm">
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
      <h2 className="font-medium text-3xl">{post.title}</h2>
      {/* description */}
      <p className="leading-snug text-neutral-600">{post.description}</p>
      <div className="flex items-center gap-2 pt-3">
        Read More <AiOutlineArrowRight size={16} />
      </div>
    </div>
  );
};
