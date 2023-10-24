import { XCircleIcon } from "@heroicons/react/20/solid";

/* To-do: message parameter, type of alerts */
export const Alert = () => {
  return (
    <div className="rounded-md bg-red-50 p-4 border border-red-200">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Unable to solve Sudoku.{" "}
            <span className="font-normal">Your input might be invalid.</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
