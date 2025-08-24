import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 10 Affordable Universities in Europe",
      excerpt: "Explore budget-friendly study options without compromising quality. Discover universities across Europe offering excellent education at reasonable costs.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Universities"
    },
    {
      title: "Visa Interview Tips for Indian Students",
      excerpt: "Boost your confidence and ace your student visa interview with our proven strategies and insider tips from successful applicants.",
      date: "March 10, 2024", 
      readTime: "7 min read",
      category: "Visa Guide"
    },
    {
      title: "Finding Accommodation in Europe",
      excerpt: "How to find the right place to live while studying abroad. From university dorms to private rentals, we cover all your housing options.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Living Abroad"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay updated with the latest insights, tips, and guides for studying in Europe.
            Our expert team shares valuable information to help you succeed.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-smooth border-border/50 hover:border-primary/20 h-full"
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary/60" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 text-primary hover:bg-primary/5"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;