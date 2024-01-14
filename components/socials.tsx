import Link from 'next/link';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaXTwitter
} from 'react-icons/fa6';

interface Props {
  label: string;
  icon: any;
  link: string;
}

const data: Props[] = [
  {
    label: '@camdzic',
    icon: FaGithub,
    link: 'https://github.com/camdzic'
  },
  {
    label: '@camdzic',
    icon: FaDiscord,
    link: 'https://discord.com/users/1182415658189848658'
  },
  {
    label: 'aldin@camdzic.dev',
    icon: FaEnvelope,
    link: 'mailto:aldin@camdzic.dev'
  },
  {
    label: '@skkpxz',
    icon: FaInstagram,
    link: 'https://instagram.com/skkpxz'
  },
  {
    label: '@devcamdzic',
    icon: FaXTwitter,
    link: 'https://x.com/devcamdzic'
  },
  {
    label: 'camdzic',
    icon: FaSpotify,
    link: 'https://open.spotify.com/user/camdzic'
  }
];

export default function Socials() {
  return (
    <div className="flex flex-col space-y-2">
      {data.map((item, i) => {
        return (
          <Link
            href={item.link}
            target="_blank"
            className="flex flex-row space-x-2 items-center group"
            key={i}
          >
            <item.icon className="text-neutral-50" />
            <p className="text-neutral-300 group-hover:text-neutral-500 transition-colors duration-150">
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
