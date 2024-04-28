import React from "react";
import { docsQuery } from "@/services/docs/docs.query";
import getQueryClient from "@/app/getQueryClient";
import Resolver from "./resolver";

const ResolverContainer = ({ title, contents }: { title: string; contents: string }) => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(docsQuery.conflicted({ title, contents }));

  return <Resolver title={title} contents={contents} />;
};

export default ResolverContainer;
