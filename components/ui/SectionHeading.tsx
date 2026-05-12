import React from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  align?: 'left' | 'center';
  description?: string;
}

export function SectionHeading({ eyebrow, title, italicWord, description, align = 'center' }: Props) {
  const display: (string | React.ReactElement)[] = italicWord
    ? title.split(italicWord).flatMap((part, i, arr) =>
        i === arr.length - 1 ? [part] : [part, <em key={i} className="italic text-gold not-italic-fallback">{italicWord}</em>],
      )
    : [title];

  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <div className={`uppercase-label text-gold mb-5 ${align === 'center' ? '' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-normal text-navy-deep tracking-tight leading-tight">
        {display.map((node, i) => (
          <span key={i}>{node}</span>
        ))}
      </h2>
      {description && (
        <p className={`font-serif italic text-lg text-ink-soft leading-relaxed mt-5 ${
          align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}