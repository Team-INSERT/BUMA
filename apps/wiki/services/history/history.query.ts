import { queryOptions } from "@tanstack/react-query";
import { HistoryListType } from "@/types";
import { getHistoryDetail, getHistoryList } from "./history.api";

export const historyQuery = {
  list: <Title extends string>(title: Title) =>
    queryOptions<HistoryListType>({
      queryKey: ["query.historyList", title],
      queryFn: () => getHistoryList(title),
    }),
  detail: <Detail extends { title: string; id: number }>({ title, id }: Detail) =>
    queryOptions({
      queryKey: ["query.historyDetail", title, id],
      queryFn: () => getHistoryDetail(title, id),
    }),
};
