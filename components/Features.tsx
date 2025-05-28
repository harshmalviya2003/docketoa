import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Zap } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Feature Card 1 */}
          <Card className="group relative overflow-hidden h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 sm:p-8 relative">
              <div className="mb-5 p-3 rounded-xl w-fit bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                <BrainCircuit className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                Intelligent Stability
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Docket interacts visually with your application using a real browser, just like your users. Say goodbye to DOM selectors, XPaths, and Playwright scripts.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="group relative overflow-hidden h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 sm:p-8 relative">
              <div className="mb-5 p-3 rounded-xl w-fit bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                Easy to Maintain
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Docket adapts tests to UI updates, suggests new tests for evolving features, and continuously flags real bugs, saving you time and effort.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}