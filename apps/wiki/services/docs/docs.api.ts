import { http } from "@/apis";
import { authorization } from "@/apis/header";
import { CreateDocsType } from "@/types";

export const getDocsListByClassify = async (classify: string) => {
  const { data } = await http.get(`/docs/${classify}`);
  return data;
};

export const getDocsByTitle = async (title: string) => {
  try {
    const { data } = await http.get(`/docs/find/title/${title}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const getDocsByKeyword = async (keyword: string) => {
  const { data } = await http.get(`/docs/find/all/title/${keyword}`);
  return data;
};

export const getLastModifiedDocsList = async (page: number) => {
  const { data } = await http.get("/docs/find/modified", { params: { page } });
  return data;
};

export const getConflictByTitle = async ({
  title,
  contents,
}: {
  title: string;
  contents: string;
}) => {
  const { data } = await http.post(`/docs/merge/${title}`, { contents });

  return data;
};

export const requestMergeDocs = async ({
  title,
  contents,
  version,
}: {
  title: string;
  contents: string;
  version: number;
}) => {
  const { data } = await http.put(`/docs/merge/${title}`, { contents, version }, authorization());

  return data;
};

export const requestCreateDocs = async (docs: CreateDocsType) => {
  const { data } = await http.post("/docs", docs, authorization());
  return data;
};

export const requestUpdateDocs = async ({
  title,
  contents,
  version,
}: {
  title: string;
  contents: string;
  version: number;
}) => {
  const { data } = await http.put(
    `/docs/${title}`,
    { contents, updatingVersion: version },
    authorization(),
  );
  return data;
};

export const requestDeleteDocs = async (id: number) => {
  const { data } = await http.delete(`/docs/${id}`, authorization());
  return data;
};

export const requestUploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await http.post("/s3", formData);
  return data;
};
