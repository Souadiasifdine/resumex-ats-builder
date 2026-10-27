
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useResume } from '@/context/ResumeContext';
import { ArrowRight, Check, Layout } from 'lucide-react';

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    image: 'classic.png',
    description: 'Traditional layout with centered header. Perfect for conservative industries.',
    tags: ['ATS-Friendly', 'Traditional', 'Professional'],
  },
  {
    id: 'modern',
    name: 'Modern',
    image: 'modern.png',
    description: 'Contemporary design with dark header and two-column layout.',
    tags: ['ATS-Friendly', 'Creative', 'Two-Column'],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    image: 'minimal.png',
    description: 'Clean, elegant design with focus on typography and whitespace.',
    tags: ['ATS-Friendly', 'Elegant', 'Clean'],
  },
  {
    id: 'compact',
    name: 'Compact',
    image: 'compact.png',
    description: 'Space-efficient two-column layout perfect for fitting more content.',
    tags: ['ATS-Friendly', '1-Page', 'Two-Column'],
  },
  {
    id: 'clean',
    name: 'Clean',
    image: 'clean.png',
    description: 'Modern gradient accents with pill-shaped skill tags.',
    tags: ['ATS-Friendly', 'Modern', 'Colorful'],
  },
  {
    id: 'simple',
    name: 'Simple',
    image: 'simple.png',
    description: 'Classic serif typography with traditional formatting.',
    tags: ['ATS-Friendly', 'Traditional', 'Serif'],
  },
  {
    id: 'freshgrad',
    name: 'Fresh Grad',
    image: 'freshgrad.png',
    description: 'Education-focused layout ideal for recent graduates.',
    tags: ['ATS-Friendly', 'Fresher', 'Education-First'],
  },
  {
    id: 'boldheader',
    name: 'Bold Header',
    image: 'bold_header.png',
    description: 'Dark header section with contrasting body for impact.',
    tags: ['ATS-Friendly', 'Bold', 'Impactful'],
  },
  {
    id: 'timeline',
    name: 'Timeline',
    image: 'Timeline.png',
    description: 'Visual timeline for experience with centered alignment.',
    tags: ['ATS-Friendly', 'Visual', 'Timeline'],
  },
  {
    id: 'grid',
    name: 'Grid Layout',
    image: 'gridlayout.png',
    description: 'Structured grid-based layout with sidebar.',
    tags: ['ATS-Friendly', 'Grid', 'Organized'],
  },
  {
    id: 'accentbar',
    name: 'Accent Bar',
    image: 'Accentbar.png',
    description: 'Top accent bar with clean sections and hover effects.',
    tags: ['ATS-Friendly', 'Accent', 'Modern'],
  },
  {
    id: 'centered',
    name: 'Centered',
    image: 'centered.png',
    description: 'Elegant centered layout with balanced typography.',
    tags: ['ATS-Friendly', 'Elegant', 'Centered'],
  },
  {
    id: 'techfocus',
    name: 'Tech Focus',
    image: 'tech_focus.png',
    description: 'Developer-themed with code-style skill display.',
    tags: ['ATS-Friendly', 'Developer', 'Technical'],
  },
  {
    id: 'executive',
    name: 'Executive',
    image: 'executive.png',
    description: 'Leadership-focused layout with strong section hierarchy and emphasis on experience and impact.',
    tags: ['ATS-Friendly', 'Leadership', 'Senior'],
  },
  {
    id: 'sidebarpro',
    name: 'Sidebar Pro',
    image: 'sidebarpro.png',
    description: 'Modern left-sidebar layout separating profile and skills from main content.',
    tags: ['ATS-Friendly', 'Sidebar', 'Modern'],
  },
  {
    id: 'onepageats',
    name: 'One Page ATS',
    image: 'onepageats.png',
    description: 'Ultra-clean single-column layout strictly optimized for ATS parsing and job portals.',
    tags: ['ATS-Optimized', 'Single-Column', 'Recruiter-Friendly'],
  },
];

const Templates = () => {
  const { selectedTemplate, setSelectedTemplate } = useResume();
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedTemplate(id);
    navigate('/builder');
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 max-w-3xl border-b border-border pb-8">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <Layout className="h-4 w-4 text-primary" />
            {templates.length} layouts · one draft
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight text-[#10172a]">
            Choose the frame for your story.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Switch layouts without losing your content. For online applications, start with One Page ATS or Classic for the simplest reading order.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 select-none">
          {templates.map((template) => (
            <article
              key={template.id}
              className={`relative overflow-hidden border-y border-border bg-card transition-colors ${
                selectedTemplate === template.id
                  ? 'border-primary shadow-md'
                  : 'border-border hover:border-muted-foreground/30'
              }`}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}

              {/* Preview */}
              <div className="aspect-[8.5/11] bg-muted/30 flex items-center justify-center p-4">
                <div className="w-full h-full bg-card rounded-lg shadow-sm border border-border overflow-hidden group flex items-center justify-center hover:shadow-md transition-shadow">
                  <img
                    className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105"
                    src={`${import.meta.env.BASE_URL}${template.image}`}
                    alt={`${template.name} resume template preview`}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {template.name}
                </h3>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {template.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => handleSelect(template.id)}
                  variant={selectedTemplate === template.id ? 'default' : 'outline'}
                  className="h-11 w-full rounded-lg text-xs"
                  size="sm"
                >
                  {selectedTemplate === template.id ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Selected
                    </>
                  ) : (
                    'Select Template'
                  )}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="h-12 rounded-lg bg-[#10172a] px-6 text-[#f5f6fa] hover:bg-[#1d2740]">
            <Link to="/builder">Continue to Builder <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Templates;