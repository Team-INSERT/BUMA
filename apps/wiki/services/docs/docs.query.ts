import { queryOptions } from "@tanstack/react-query";
import { DocsListItemType, DocsItemType, DocsListType } from "@/types";
import {
  getConflictByTitle,
  getDocsByKeyword,
  getDocsByTitle,
  getDocsListByClassify,
  getLastModifiedDocsList,
} from "./docs.api";

type QueryOptions<Classify extends string> = Classify extends "popular"
  ? Array<DocsListItemType>
  : DocsListType;

export const docsQuery = {
  list: <Classify extends string>(classify: Classify) =>
    queryOptions<QueryOptions<Classify>>({
      queryKey: ["query.docsList", classify],
      queryFn: () => getDocsListByClassify(classify),
    }),
  title: <Title extends string>(title: Title) =>
    queryOptions<DocsItemType>({
      queryKey: ["query.docsTitle", title],
      queryFn: () => getDocsByTitle(title),
    }),
  keyword: <Keyword extends string>(keyword: Keyword) =>
    queryOptions<Array<DocsListItemType>>({
      queryKey: ["query.docsKeyword", keyword],
      queryFn: () => getDocsByKeyword(keyword),
    }),
  lastModified: <Page extends number>(page: Page) =>
    queryOptions({
      queryKey: ["query.lastModifiedAt", page],
      queryFn: () => getLastModifiedDocsList(page),
    }),
  conflicted: <Params extends { title: string; contents: string }>({ title, contents }: Params) =>
    queryOptions({
      queryKey: ["query.conflicted", title],
      queryFn: () => getConflictByTitle({ title, contents }),
    }),
};
