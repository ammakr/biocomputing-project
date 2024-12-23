"use client";

import { useState } from "react";
import { Form } from "./home/Form";
import { Result } from "./home/Result";
import Image from "next/image";
import Content from "./home/Content";

export default function HomeScreen() {
  const [sequence1, setSequence1] = useState("");
  const [sequence2, setSequence2] = useState("");

  const handleSequence1Change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSequence1(e.target.value.toUpperCase());
  const handleSequence2Change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSequence2(e.target.value.toUpperCase());

  const calculateSimilarity = () => {
    const length = Math.min(sequence1.length, sequence2.length);
    let matches = 0;

    for (let i = 0; i < length; i++) {
      if (sequence1[i] === sequence2[i]) {
        matches++;
      }
    }

    return (matches / length) * 100;
  };

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Image
                width={200}
                height={200}
                alt="QAU Logo"
                src="/logo.png"
                className="h-24 w-auto"
              />
              <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                DNA Sequence Alignment
              </h1>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                A project made by{" "}
                <a
                  href="https://ammarakram.com"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Ammar Akram
                </a>
              </p>
            </div>

            <div className="mt-10">
              <Form
                sequence1={sequence1}
                sequence2={sequence2}
                handleSequence1Change={handleSequence1Change}
                handleSequence2Change={handleSequence2Change}
              />
              <Result
                seq1={sequence1}
                seq2={sequence2}
                similarity={calculateSimilarity()}
              />
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Content />
        </div>
      </div>
    </>
  );
}
