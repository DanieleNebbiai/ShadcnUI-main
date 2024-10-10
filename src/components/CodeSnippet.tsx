import { useState } from "react";
import { Card, CardContent } from "./ui/ThemeCard";
import { Typography } from "./Typography";
import { Button } from "./ui/ThemeButton";
import { Copy, Check } from "lucide-react";

interface CodeSnippetProps {
  span: string;
  code: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, span }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = `${span}\n${code}`;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="flex items-center h-full bg-black/90 overflow-auto">
      <CardContent className="flex-1 flex items-start p-4 relative">
        <Typography variant="p" className="text-left text-white/60">
          <pre>
            <span className="font-bold text-white">{span}</span>
            <code>{code}</code>
          </pre>
        </Typography>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-white/60 hover:text-white hover:bg-white/10"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
