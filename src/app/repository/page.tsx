"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Head from "next/head";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
  language: string;
  stargazers_count: number;
}

interface UserData {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  email: string;
}

export default function GitHubProfile() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [emails, setEmails] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHubData = async () => {
      if (status === "authenticated" && session?.accessToken) {
        setIsLoading(true);
        try {
          // Fetch user data
          const userResponse = await fetch("https://api.github.com/user", {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });

          if (!userResponse.ok) {
            throw new Error("Failed to fetch user data");
          }

          const userData = await userResponse.json();
          setUserData(userData);

          // Fetch repositories
          const reposResponse = await fetch(
            "https://api.github.com/user/repos?sort=updated&per_page=10",
            {
              headers: {
                Authorization: `Bearer ${session.accessToken}`,
              },
            }
          );

          if (!reposResponse.ok) {
            throw new Error("Failed to fetch repositories");
          }

          const reposData = await reposResponse.json();
          setRepositories(reposData);

          // Fetch user emails
          const emailsResponse = await fetch(
            "https://api.github.com/user/emails",
            {
              headers: {
                Authorization: `Bearer ${session.accessToken}`,
              },
            }
          );

          if (!emailsResponse.ok) {
            throw new Error("Failed to fetch emails");
          }

          const emailsData = await emailsResponse.json();
          setEmails(emailsData.map((email: any) => email.email));
        } catch (err) {
          console.error("Error fetching GitHub data:", err);
          setError("Failed to load GitHub data. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchGitHubData();
  }, [session, status]);

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Not signed in</h1>
          <p className="mb-4">You need to sign in to view this page</p>
          <button
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go to Sign In
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="mb-4 text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>GitHub Profile | {userData?.name}</title>
      </Head>

      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">GitHub Profile</h1>
            <button
              onClick={() => signOut({ callbackUrl: "/auth/signin" })}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {userData && (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6 flex items-center">
                <img
                  src={userData.avatar_url}
                  alt={userData.name}
                  className="h-24 w-24 rounded-full mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {userData.name}
                  </h2>
                  <p className="text-sm text-gray-500">@{userData.login}</p>
                  <p className="mt-1">{userData.bio}</p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      GitHub URL
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {userData.html_url}
                      </a>
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email addresses
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {emails.length > 0 ? (
                        <ul className="list-disc pl-5">
                          {emails.map((email, index) => (
                            <li key={index}>{email}</li>
                          ))}
                        </ul>
                      ) : (
                        "No public email available"
                      )}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Public repositories
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {userData.public_repos}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Followers
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {userData.followers}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Following
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                      {userData.following}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Recent Repositories
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Your 10 most recently updated repositories
              </p>
            </div>

            {repositories.length > 0 ? (
              <div className="border-t border-gray-200 divide-y divide-gray-200">
                {repositories.map((repo) => (
                  <div key={repo.id} className="px-4 py-5 sm:px-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-medium text-blue-600">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {repo.name}
                          </a>
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {repo.description || "No description available"}
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          {repo.language && (
                            <span className="mr-4">
                              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                              {repo.language}
                            </span>
                          )}
                          <span className="mr-4">
                            <svg
                              className="h-4 w-4 inline mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {repo.stargazers_count} stars
                          </span>
                          <span>
                            Updated on{" "}
                            {new Date(repo.updated_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-5 sm:px-6 text-center">
                <p className="text-gray-500">No repositories found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
