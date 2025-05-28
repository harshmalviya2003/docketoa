
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black border-2 border-gray-300/30 rounded-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-br from-gray-100 to-gray-300/70 bg-clip-text text-transparent">
          Just Ship. Let AI Test.
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Test your application using plain English. Docket handles the complexity, so you can focus on building great products.
        </p>
        <Button size="lg" className="text-lg text-black px-12 h-14 rounded-full bg-white hover:opacity-90 hover:text-white">
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
