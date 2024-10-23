(async () => {
	const response = await fetch('https://blog.miszczak.dev/index.json')
	const blogArticles = await response.json();
	const article = blogArticles[0];

	appendTextToElement('latest-article-title', article.title);
	appendTextToElement('latest-article-content', article.content);
	document.getElementById('latest-article-link').href = article.permalink;
	document.getElementById('latest-article').style.display = 'block';
})();

function appendTextToElement(id, text) {
	const textNode = document.createTextNode(text);
	const node = document.getElementById(id);

	node.appendChild(textNode);
}
