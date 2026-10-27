// import { useResume } from '@/context/ResumeContext';
// import { cn } from '@/lib/utils';
// import { Check } from 'lucide-react';

// const templates = [
//   {
//     id: 'classic',
//     name: 'Classic',
//     description: 'Traditional ATS-friendly format',
//     preview: 'Classic centered header with clean sections',
//   },
//   {
//     id: 'modern',
//     name: 'Modern',
//     description: 'Contemporary two-column layout',
//     preview: 'Dark header with sidebar layout',
//   },
//   {
//     id: 'minimal',
//     name: 'Minimal',
//     description: 'Clean and elegant design',
//     preview: 'Lightweight typography-focused layout',
//   },
// ];

// const TemplateSwitcher = () => {
//   const { selectedTemplate, setSelectedTemplate } = useResume();

//   return (
//     <div className="space-y-4">
//       <div>
//         <h3 className="text-lg font-semibold text-foreground mb-1">Choose Template</h3>
//         <p className="text-sm text-muted-foreground">Select an ATS-friendly template</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//         {templates.map((template) => (
//           <button
//             key={template.id}
//             onClick={() => setSelectedTemplate(template.id)}
//             className={cn(
//               "relative p-4 rounded-xl border-2 text-left transition-all duration-200",
//               selectedTemplate === template.id
//                 ? "border-primary bg-primary/5 shadow-md"
//                 : "border-border bg-card hover:border-muted-foreground/30 hover:shadow-sm"
//             )}
//           >
//             {selectedTemplate === template.id && (
//               <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
//                 <Check className="h-3 w-3 text-primary-foreground" />
//               </div>
//             )}
//             <h4 className="font-semibold text-foreground mb-1">{template.name}</h4>
//             <p className="text-xs text-muted-foreground">{template.description}</p>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TemplateSwitcher;

import { useResume } from "@/context/ResumeContext";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const templates = [
	{ id: "classic", name: "Classic", description: "Traditional ATS format" },
	{ id: "modern", name: "Modern", description: "Two-column layout" },
	{ id: "minimal", name: "Minimal", description: "Typography focused" },
	{ id: "compact", name: "Compact", description: "Space-efficient 1-page" },
	{ id: "clean", name: "Clean", description: "Gradient & skill pills" },
	{ id: "simple", name: "Simple", description: "Classic serif typography" },
	{ id: "freshgrad", name: "Fresh Grad", description: "Education-first" },
	{
		id: "boldheader",
		name: "Bold Header",
		description: "Dark high-contrast header",
	},
	{ id: "timeline", name: "Timeline", description: "Visual timeline flow" },
	{ id: "grid", name: "Grid Layout", description: "Structured grid sidebar" },
	{ id: "accentbar", name: "Accent Bar", description: "Top accent design" },
	{ id: "centered", name: "Centered", description: "Balanced typography" },
	{ id: "techfocus", name: "Tech Focus", description: "Developer code-style" },
	{ id: "executive", name: "Executive", description: "Leadership hierarchy" },
	{ id: "sidebarpro", name: "Sidebar Pro", description: "Left-sidebar layout" },
	{
		id: "onepageats",
		name: "One Page ATS",
		description: "Single-column parsing",
	},
];

const TemplateSwitcher = () => {
	const { selectedTemplate, setSelectedTemplate } = useResume();

	return (
		<div className="space-y-3">
			<div>
				<h3 className="text-lg font-semibold text-foreground mb-1">
					Choose Template
				</h3>
				<p className="text-sm text-muted-foreground">
					Scroll to explore all {templates.length} templates
				</p>
			</div>

			{/* Horizontal container with completely hidden scrollbar */}
			<div className="w-full overflow-x-auto py-1 scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
				<div className="flex gap-3 w-max">
					{templates.map((template) => (
						<button
							key={template.id}
							onClick={() => setSelectedTemplate(template.id)}
							className={cn(
								"relative w-52 shrink-0 p-3.5 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer select-none",
								selectedTemplate === template.id
									? "border-primary bg-primary/5 shadow-md"
									: "border-border bg-card hover:border-muted-foreground/30 hover:shadow-sm",
							)}
						>
							{selectedTemplate === template.id && (
								<div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
									<Check className="h-3 w-3 text-primary-foreground" />
								</div>
							)}
							<h4 className="font-semibold text-foreground text-sm mb-0.5 pr-6">
								{template.name}
							</h4>
							<p className="text-xs text-muted-foreground line-clamp-1">
								{template.description}
							</p>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default TemplateSwitcher;
