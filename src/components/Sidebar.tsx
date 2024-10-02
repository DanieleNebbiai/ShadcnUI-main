import { Typography } from "./Typography";

const categories = [
  "Getting started",
  "Actions",
  "Data display",
  "Navigation",
  "Feedback",
  "Data input",
  "Layout",
];

interface SidebarProps {
  onCategoryClick: (category: string) => void;
  selectedCategory: string;
}

export function Sidebar({ onCategoryClick, selectedCategory }: SidebarProps) {
  return (
    <div className="w-64 h-full overflow-y-auto fixed p-4">
      <Typography
        variant="p"
        className="font-extrabold text-xl text-foreground mb-4"
      >
        Categories
      </Typography>
      <ul>
        {categories.map((category) => {
          const categoryKey = category.toLowerCase().replace(/ /g, "-");
          const isSelected = selectedCategory === categoryKey;
          return (
            <li key={category} className="mb-2">
              <Typography variant="p">
                <button
                  onClick={() => onCategoryClick(categoryKey)}
                  className={`cursor-pointer ${
                    isSelected
                      ? "font-bold text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              </Typography>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
