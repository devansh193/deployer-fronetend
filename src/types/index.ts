export type Repository = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  description: string | null;
  html_url: string;
  updated_at: string;
  clone_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};
