import { GithubIcon } from './icons/github-icon';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-neutral-6 border-t p-4">
      <div className="flex items-center gap-4">
        <p className="typography-xs-normal text-neutral-5">
          @laihuynhnhatminh - 2025
        </p>
        <a
          href="https://github.com/laihuynhnhatminh/code-challenge-test"
          target="_blank"
        >
          <GithubIcon size={24} />
        </a>
      </div>
      <p className="typography-xs-normal text-neutral-5">
        Made with ❤️ by Lai Huynh Nhat Minh for Code Challenge Test
      </p>
    </footer>
  );
}
