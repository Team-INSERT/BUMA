import { HistoryType } from ".";

export default interface HistoryListType {
  versionDocsResponseDto: Array<HistoryType>;
  docsType: string;
  title: string;
}
