import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const SocialLink = ({
  platform,
  link,
  isShareUrl = false,
}: {
  platform: string;
  link: string;
  isShareUrl?: boolean;
}) => {
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
        case "whatsapp":
        return <FaWhatsapp size={18} />;
      default:
        return null;
    }
  };

  return (
    <Link href={link}>
      <div
        className={`${
          isShareUrl
            ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 cursor-pointer duration-100 ease-in-out transition-colors"
            : ""
        }`}
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};

export default SocialLink;
