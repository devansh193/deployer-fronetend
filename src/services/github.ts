import { Octokit } from "octokit";

export class GithubService {
  private octokit: Octokit;
  constructor(private accessToken: string) {
    this.octokit = new Octokit({ auth: accessToken });
  }

  async listRepositories() {
    const { data } = await this.octokit.request("GET /user/repos", {
      visibility: "all",
      per_page: 100,
      sort: "updated",
    });
    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      private: repo.private,
      html_url: repo.html_url,
      default_branch: repo.default_branch,
      clone_url: repo.clone_url,
    }));
  }
  async validateNextJsProject(repoFullName: string) {
    const [owner, repo] = repoFullName.split("/");
    try {
      const { data: pkg } = await this.octokit.request(
        "GET /repos/{owner}/{repo}/contents/package.json",
        {
          owner,
          repo,
        },
      );
      const content = JSON.parse(
        Buffer.from(pkg.content, "base64").toString("utf8"),
      );
      return {
        isNextJs: !!content.dependencies?.next,
        hasBuildScript: !!content.scripts?.build,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return { isNextJs: false, hasBuildScript: false };
    }
  }
}
