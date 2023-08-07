import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialLink = ({ platform, link }: { platform: string; link: string }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <FaFacebook size={18} />;
      case "twitter":
        return <FaTwitter size={18} />;
      case "instagram":
        return <FaInstagram size={18} />;
      case "youtube":
        return <FaYoutube size={18} />;
      case "linkedin":
        return <FaLinkedin size={18} />;
      case "github":
        return <FaGithub size={18} />;
      default:
        return null;
    }
  };

  return <Link href={link}>{getIcon(platform)}</Link>;
};

export default SocialLink;
