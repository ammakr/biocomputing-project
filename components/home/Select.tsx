export default function Select({
  algorithm,
  setAlgorithm,
}: {
  algorithm: string;
  setAlgorithm: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <label
        htmlFor="algorithm"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Algorithm
      </label>
      <select
        id="algorithm"
        name="algorithm"
        defaultValue="needleman-wunsch"
        onChange={(e) => setAlgorithm(e.target.value)}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="needleman-wunsch">Needleman-Wunsch</option>
        <option value="smith-waterman">Smith-Waterman</option>
      </select>
    </div>
  );
}
