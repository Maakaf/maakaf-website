async function fetchRepoProject(owner: string, repo: string) {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
    .then(response => response.json())
    .then(data => {
      // Process the retrieved repository data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
}

export default fetchRepoProject;
