import { BlogHeader } from "./components/ui/BlogHeader";
import { BlogGrid } from "./components/ui/BlogGrid";
import { BlogProvider } from "./context/BlogProvider";

// Index Component - Main entry point for the blog
const Index = () => {
  return (
    <BlogProvider>
      <main className="w-full max-w-[1440px] mx-auto my-0">
        {/* BlogHeader Component - Displays the blog header */}
        <BlogHeader />
        {/* BlogGrid Component - Displays the grid of blog posts */}
        <BlogGrid />
      </main>
    </BlogProvider>
  );
};

export default Index