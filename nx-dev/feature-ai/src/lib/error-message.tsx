import {
  XCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export function ErrorMessage({ error }: { error: any }): JSX.Element {
  if (error.data.no_results) {
    return (
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-500"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              No results found
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              Sorry, I don't know how to help with that. You can visit the{' '}
              <a
                href="https://nx.dev/getting-started/intro"
                className="underline"
              >
                Nx documentation
              </a>{' '}
              for more info.
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Oopsies! I encountered an error
            </h3>
            <div className="mt-2 text-sm text-red-700">{error['message']}</div>
          </div>
        </div>
      </div>
    );
  }
}
