import { GithubIcon } from './icons/github-icon';

export default function Footer() {
  return (
    <header className="flex items-center border-neutral-6 border-b p-4">
      <a
        href="https://github.com/laihuynhnhatminh/code-challenge-test"
        target="_blank"
      >
        <GithubIcon size={24} />
      </a>
      <h3>Click on the GitHub logo to view the project</h3>
    </header>
  );
}
