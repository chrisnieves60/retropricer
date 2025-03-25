import { useEffect, useState } from "react";

interface AdditionalInfoProps {
  min: number;
  max: number;
  average: number;
  current_average: string | null;
}

export default function AdditionalInfo({
  min,
  max,
  average,
  current_average,
}: AdditionalInfoProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (min || max || average) {
      setIsLoading(false);
    }
  }, [average]);

  return (
    <div className="bg-white rounded-xl shadow-md mt-8 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Used</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lowest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Highest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Avg
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                Ebay (Console Only)
              </td>
              {isLoading ? (
                <>
                  <td className="px-6 py-4 whitespace-nowrap">Fetching...</td>
                  <td className="px-6 py-4 whitespace-nowrap">Fetching...</td>
                  <td className="px-6 py-4 whitespace-nowrap">Fetching...</td>
                  <td className="px-6 py-4 whitespace-nowrap">Fetching...</td>
                </>
              ) : (
                <>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {min.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {max.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {average.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {current_average}
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
