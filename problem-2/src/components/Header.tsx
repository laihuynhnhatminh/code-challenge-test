import { GithubIcon } from './icons/github-icon';
import { ModeToggle } from './theme-toggle';

export default function Footer() {
  return (
    <header className="flex items-center justify-between border-neutral-6 border-b p-4">
      <div className="flex items-center gap-2 text-primary">
        <a
          href="https://github.com/laihuynhnhatminh/code-challenge-test"
          target="_blank"
        >
          <GithubIcon size={24} />
        </a>
        <h3>Click on the GitHub logo to view the project</h3>
      </div>
      <ModeToggle />
    </header>
  );
}
