import { queryClient } from "./ReactQuerySetting";
import { QueryKey } from "@tanstack/react-query";

export default function invalidateQueries({
  queryKeys,
  isWaitForAllQueries = false,
}: {
  queryKeys: QueryKey[];
  isWaitForAllQueries?: boolean;
}) {
  const queries = queryKeys.map((queryKey) =>
    queryClient.invalidateQueries({ queryKey })
  );

  if (isWaitForAllQueries) {
    return Promise.all(queries);
  } else {
    return queries[queryKeys.length - 1];
  }
}
