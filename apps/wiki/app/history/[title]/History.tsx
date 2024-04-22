"use client";

import { Suspense } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { useSuspenseQuery } from "@tanstack/react-query";
import { historyQuery } from "@/services/history/history.query";
import { useDate } from "@/hooks";
import * as styles from "./style.css";

const History = ({ title }: { title: string }) => {
  const { formatDate } = useDate();
  const { data: history } = useSuspenseQuery(historyQuery.list(title));

  return (
    <Suspense>
      <Container title={history.title} docsType={history.docsType}>
        {history.versionDocsResponseDto.map((docsHistory) => (
          <Link
            href={`/history/${history.title}/detail/${docsHistory.index}`}
            className={styles.historyBox}
            key={String(docsHistory.thisVersionCreatedAt)}
          >
            <hgroup className={styles.hgroup}>
              <h1 className={styles.historyId}>#{docsHistory.index}</h1>
              <time className={styles.createdAt}>
                편집일 ·&nbsp;
                {formatDate(docsHistory.thisVersionCreatedAt)}
              </time>
            </hgroup>
            <span className={styles.author}>작성자 ·&nbsp;{docsHistory.nickName}</span>
          </Link>
        ))}
      </Container>
    </Suspense>
  );
};

export default History;
