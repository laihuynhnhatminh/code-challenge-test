/** biome-ignore-all lint/correctness/useUniqueElementIds: Just a page to display with ids so we do motion */
import {
  BarChart3,
  CheckCircle,
  MonitorSpeaker,
  Rocket,
  Shield,
  Zap,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';

export function LandingFeature() {
  return (
    <section
      id="features"
      className="rounded-4xl border border-primary px-4 py-20"
    >
      <div className="mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">
            Everything you need to know about for Crypto Trading
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
            Powerful features designed to help you trade crypto with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <BarChart3 className="h-8 w-8 text-primary-500" />,
              title: 'Advanced Analytics',
              description:
                'Get deep insights into your trading performance with real-time dashboards and custom reports.',
            },
            {
              icon: <Shield className="h-8 w-8 text-primary-500" />,
              title: 'Enterprise Security',
              description:
                'Bank-level encryption and compliance with SOC 2, GDPR, and other industry standards.',
            },
            {
              icon: <MonitorSpeaker className="h-8 w-8 text-primary-500" />,
              title: 'Notification System',
              description:
                'Express notification tools that keep your trading team aligned and productive.',
            },
            {
              icon: <Rocket className="h-8 w-8 text-primary-500" />,
              title: 'Fast Deployment',
              description:
                'Get your trading infrastructure up and running in minutes.',
            },
            {
              icon: <Zap className="h-8 w-8 text-primary-500" />,
              title: 'Smart Automation',
              description:
                'Trading automation tools to keep your strategies on track.',
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-primary-500" />,
              title: 'Quality Assurance',
              description:
                'Built-in quality checks and approval workflows to maintain high standards.',
            },
          ].map((feature, index) => (
            <Card
              key={`feature-${feature.title}-${index}`}
              className="cursor-pointer border-border bg-transparent p-4 text-primary transition-shadow hover:shadow-2xl"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="typography-base-normal">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
