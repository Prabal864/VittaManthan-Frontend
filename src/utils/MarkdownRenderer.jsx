import React from 'react';
import { Terminal, Grid, Database, Calculator } from 'lucide-react';

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  // Split content by logical blocks (math blocks, then newlines)
  const lines = content.split('\n');
  const elements = [];
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    
    // 1. Handle Math Blocks \[ ... \]
    if (line.includes('\\[')) {
        let mathContent = line;
        let j = i + 1;
        if (!line.includes('\\]')) {
            while (j < lines.length) {
                mathContent += '\n' + lines[j];
                if (lines[j].includes('\\]')) {
                    break;
                }
                j++;
            }
        }
        
        // Clean up the bracket markers for display
        const displayMath = mathContent.replace(/\\\[|\\\]/g, '').trim();
        
        elements.push(
            <div key={`math-${i}`} className="math-block">
               <div className="math-label"><Calculator size={14}/> Formula</div>
               <div className="math-content">{displayMath}</div>
            </div>
        );
        i = j + 1;
        continue;
    }

    // 2. Handle Tables
    if (line.startsWith('|')) {
        const tableRows = [];
        let j = i;
        while (j < lines.length && lines[j].trim().startsWith('|')) {
            tableRows.push(lines[j].trim());
            j++;
        }
        
        // Process table
        if (tableRows.length > 0) {
            const headerRow = tableRows[0];
            const separatorRow = tableRows.length > 1 ? tableRows[1] : null;
            const bodyRows = tableRows.slice(separatorRow && separatorRow.includes('---') ? 2 : 1);
            
            elements.push(
                <div key={`table-${i}`} className="table-responsive-md">
                    <table className="md-styled-table">
                        <thead>
                            <tr>
                                {headerRow.split('|').filter(c => c.trim()).map((cell, idx) => (
                                    <th key={idx}>{parseInline(cell.trim())}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {bodyRows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                    {row.split('|').filter((c, idx, arr) => {
                                        // Filter out empty start/end splits if valid table row
                                        // Heuristic: check if line ends with |
                                        return idx > 0 || (idx === 0 && c.trim() !== '') || row.indexOf('|') !== 0; 
                                        // Simpler: just split and filter empty strings usually results from |...| syntax
                                    }).filter(c => c !== undefined).map((cell, cIdx) => (
                                        <td key={cIdx}>{parseInline(cell.trim())}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        i = j;
        continue;
    }

    // 3. Horizontal Rule
    if (line.startsWith('---')) {
        elements.push(<hr key={`hr-${i}`} className="md-hr" />);
        i++;
        continue;
    }

    // 4. Headers
    if (line.startsWith('#')) {
        const level = line.match(/^#+/)[0].length;
        const text = line.replace(/^#+/, '').trim();
        const Tag = `h${Math.min(level + 1, 6)}`; // Shift down levels slightly for chat context
        elements.push(<Tag key={`header-${i}`} className="md-header">{parseInline(text)}</Tag>);
        i++;
        continue;
    }

    // 5. Lists
    if (line.match(/^(\*|-|\d+\.)\s/)) {
        // Collect list items
        const listItems = [];
        let j = i;
        const isOrdered = /^\d+\./.test(line);
        
        while (j < lines.length && lines[j].trim().match(/^(\*|-|\d+\.)\s/)) {
             const cleanLine = lines[j].trim().replace(/^(\*|-|\d+\.)\s/, '');
             listItems.push(cleanLine);
             j++;
        }

        const ListTag = isOrdered ? 'ol' : 'ul';
        elements.push(
            <ListTag key={`list-${i}`} className="md-list">
                {listItems.map((item, idx) => (
                    <li key={idx}>{parseInline(item)}</li>
                ))}
            </ListTag>
        );
        i = j;
        continue;
    }

    // 6. Paragraphs (default)
    if (line) {
        elements.push(<p key={`p-${i}`} className="md-paragraph">{parseInline(line)}</p>);
    }
    
    i++;
  }

  return <div className="markdown-content">{elements}</div>;
};

// Helper for inline formatting (bold, italic, code)
const parseInline = (text) => {
    if (!text) return "";
    
    // Simple regex parser for links, bold, italic, and code
    // Note: React requires arrays of elements to render mixed content safely
    
    // Regex splits by:
    // 1. Links: [text](url)
    // 2. Bold: **text**
    // 3. Italic: *text*
    // 4. Code: `text`
    const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    
    return parts.map((part, index) => {
        // Link Parsing: [text](url)
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
            return (
                <a 
                    key={index} 
                    href={linkMatch[2]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="md-link"
                >
                    {linkMatch[1]}
                </a>
            );
        }

        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={index}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={index} className="inline-code">{part.slice(1, -1)}</code>;
        }
        return part;
    });
};

export default MarkdownRenderer;
