import { Button } from '../../ui/button';

export function LandingCTA() {
  return (
    <section className="rounded-4xl border border-primary px-4 py-20">
      <div className="mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">
            Ready to take your trading to the next level?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
            Join our platform and start trading with confidence.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            name="get-started"
            variant="outline"
            onClick={() => {
              scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
