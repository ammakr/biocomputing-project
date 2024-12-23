import {
  CloudArrowUpIcon,
  GlobeAltIcon,
  LockClosedIcon,
  RectangleGroupIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 pt-24 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="lg:pr-4">
        <div className="lg:max-w-lg pb-6">
          <p className="text-base/7 font-semibold text-indigo-600">
            Biocomputing II
          </p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            DNA sequence comparison tool
          </h1>
        </div>
      </div>

      <div className="lg:pr-4">
        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-2xl">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <GlobeAltIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Built with NextJS.
                </strong>{" "}
                This project is built with Next.js, a React framework for
                building modern web applications.
              </span>
            </li>
            <li className="flex gap-x-3">
              <RectangleGroupIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Needleman Wunsch Algorithm.
                </strong>{" "}
                The Needleman-Wunsch algorithm is an algorithm used in
                bioinformatics to align protein or nucleotide sequences.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ServerIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-indigo-600"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Deployed on Vercel.
                </strong>{" "}
                Vercel is a cloud platform for static sites and Serverless
                Functions that fits perfectly with Next.js.
              </span>
            </li>
          </ul>
          <p className="mt-8 italic">
            Submitted to Dr. Adnan, Department of Bioinformatics, Quaid-i-Azam
            University, Islamabad.
          </p>
        </div>
      </div>
    </div>
  );
}
