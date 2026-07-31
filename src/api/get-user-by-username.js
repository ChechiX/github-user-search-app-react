export const getUserByUsername = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
