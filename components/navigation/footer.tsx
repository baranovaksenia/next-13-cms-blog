import React from "react";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocialLink from "../elements/social-link";

const Footer = () => {
  return (
    <div className="py-8 mt-10 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* social and currently at */}
        {/* wrap on small devices and add space between */}
        <div className="flex justify-between flex-wrap gap-4 mt-6">
          <div>
            <div className="font-medium text-lg">#explorertheworld</div>
            <div className="flex items-center gap-3 mt-2 text-neutral-600">
              <SocialLink
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
              <SocialLink
                platform="youtube"
                link={siteConfig.socialLinks.youtube}
              />
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-md
             shadow-md"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="flex flex-wrap justify-between items-center gap-4 py-3 border-t mt-16">
          <div className=" text-sm text-neutral-400">
            All rights reserved. {new Date().getFullYear()}{" "}
            {siteConfig.siteName}
          </div>
          <div className="text-sm">
            Made with love by
            <Link
              className=" text-emerald-800 underline underline-thickness-thin underline-offset-small"
              href="/"
            >
              @success&code
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
