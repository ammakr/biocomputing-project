import needleman from "@/lib/needleman";
import { useEffect, useState } from "react";

export function Result({
  seq1,
  seq2,
  similarity,
}: {
  seq1: string;
  seq2: string;
  similarity: number;
}) {
  const [alignment, setAlignment] = useState<any>(null);

  useEffect(() => {
    if (seq1 && seq2) {
      const result = needleman(seq1, seq2);
      setAlignment(result);
    }
  }, [seq1, seq2]);

  const highlightAlignment = (seq1: string, seq2: string) => {
    return seq1.split("").map((char, index) => {
      if (char === seq2[index]) {
        return (
          <span key={index} style={{ backgroundColor: "lightgreen" }}>
            {char}
          </span>
        );
      } else if (char === "-" || seq2[index] === "-") {
        return (
          <span key={index} style={{ backgroundColor: "lightcoral" }}>
            {char}
          </span>
        );
      } else {
        return (
          <span key={index} style={{ backgroundColor: "red", color: "white" }}>
            {char}
          </span>
        );
      }
    });
  };
  return (
    <div className="mt-10">
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm font-medium leading-6">
          <span className="bg-white px-6 text-gray-900">
            {similarity ? similarity : 0}% match
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {alignment && seq1.length > 0 && seq2.length > 0 && (
          <div style={{ marginTop: "2px" }}>
            <h2 className="py-4 text-sm font-light tracking-wider uppercase">
              Aligned Sequences
            </h2>
            <div className="font-mono text-sm tracking-widest whitespace-nowrap">
              {highlightAlignment(alignment.alignedSeq1, alignment.alignedSeq2)}
            </div>
            <div className="font-mono text-sm tracking-widest whitespace-nowrap">
              {highlightAlignment(alignment.alignedSeq2, alignment.alignedSeq1)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
