import React from 'react';

interface RichTextRendererProps {
  content: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  const formatText = (text: string) => {
    // Split by lines first to preserve line breaks
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Process each line for formatting
      let formattedLine = line;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      
      // Regex patterns for different formatting
      const patterns = [
        // **bold** or __bold__
        { regex: /(\*\*|__)(.*?)\1/g, className: 'font-bold text-yellow-300' },
        // ==highlight==
        { regex: /(==)(.*?)\1/g, className: 'bg-yellow-500 text-black px-1 rounded font-semibold' },
        // ++red text++
        { regex: /(\+\+)(.*?)\1/g, className: 'text-red-400 font-semibold' },
        // --green text--
        { regex: /(--)(.*?)\1/g, className: 'text-green-400 font-semibold' },
        // ~~blue text~~
        { regex: /(~~)(.*?)\1/g, className: 'text-blue-400 font-semibold' },
        // ##orange text##
        { regex: /(##)(.*?)\1/g, className: 'text-orange-400 font-semibold' },
        // %%purple text%%
        { regex: /(%%)(.+?)\1/g, className: 'text-purple-400 font-semibold' }
      ];
      
      // Find all matches for all patterns
      const allMatches: Array<{
        start: number;
        end: number;
        content: string;
        className: string;
      }> = [];
      
      patterns.forEach(pattern => {
        let match;
        const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
        while ((match = regex.exec(line)) !== null) {
          allMatches.push({
            start: match.index,
            end: match.index + match[0].length,
            content: match[2], // The content inside the markers
            className: pattern.className
          });
        }
      });
      
      // Sort matches by start position
      allMatches.sort((a, b) => a.start - b.start);
      
      // Build the formatted line
      let currentIndex = 0;
      allMatches.forEach((match, matchIndex) => {
        // Add text before this match
        if (match.start > currentIndex) {
          parts.push(line.slice(currentIndex, match.start));
        }
        
        // Add the formatted match
        parts.push(
          <span key={`${lineIndex}-${matchIndex}`} className={match.className}>
            {match.content}
          </span>
        );
        
        currentIndex = match.end;
      });
      
      // Add remaining text
      if (currentIndex < line.length) {
        parts.push(line.slice(currentIndex));
      }
      
      // If no formatting was applied, just return the original line
      if (parts.length === 0) {
        parts.push(line);
      }
      
      return (
        <React.Fragment key={lineIndex}>
          {parts}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return <div className="whitespace-pre-wrap">{formatText(content)}</div>;
};

export default RichTextRenderer;