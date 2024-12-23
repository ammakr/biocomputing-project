export function Form({
  sequence1,
  sequence2,
  handleSequence1Change,
  handleSequence2Change,
}: {
  sequence1: string;
  sequence2: string;
  handleSequence1Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSequence2Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="sequence_one"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Sequence One
          </label>
          <div className="mt-2">
            <input
              id="sequence_one"
              name="sequence_one"
              type="text"
              required
              value={sequence1}
              onChange={handleSequence1Change}
              autoComplete="sequence_one"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="sequence_two"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Sequence Two
          </label>
          <div className="mt-2">
            <input
              id="sequence_two"
              name="sequence_two"
              value={sequence2}
              onChange={handleSequence2Change}
              type="text"
              required
              autoComplete="current-sequence_two"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="hidden">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Align
          </button>
        </div>
      </form>
    </div>
  );
}
