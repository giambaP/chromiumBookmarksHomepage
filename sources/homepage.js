const SITE_FOLDER = "Progetti";
const COLORS = {

};


#001f3f /*NAVY*/
#0074D9 /*BLUE*/
#7FDBFF /*AQUA*/
#39CCCC /*TEAL*/
#3D9970 /*OLIVE*/
#2ECC40 /*GREEN*/
#01FF70 /* LIME */
#FFDC00 /* YELLOW */
#FF851B /* ORANGE */
#FF4136 /* RED */
#85144b /* MAROON */
#F012BE /* FUCHSIA */
#B10DC9 /* PURPLE */
#111111 /* BLACK */
#AAAAAA /* GRAY */
#DDDDDD /* SILVER */

chrome.bookmarks.getTree(function (bmTree) {
	bfs(bmTree[0]);
});

function bfs(tree) {
	var isFolder = tree.children;
	if (isFolder) {
		if (tree.title === SITE_FOLDER) {
			readBookmarks(tree);
		} else {
			tree.children.forEach(function (tree) {
				bfs(tree);
			});
		}
	}
}

function readBookmarks(tree) {
	var foldersContainer = $('.foldersContainers');
	tree.children.forEach(function (folder) {
		var html =
			"<span class='folderTitle'>" + folder.title + "</span>" +
			"<div class='folder'>";
		folder.children.forEach(function (page) {
			html +=
				"<div class='page'>" +
				"	<a href=\"" + page.url + "\"></a>" +
				"	<span>" + page.title + "</span>" +
				"</div>";
		});
		html += "</div>";
		foldersContainer.append(html);
	});


	// adding on click function to navigate
	foldersContainer.find(".page").click(function () {
		window.location = $(this).find("a").attr("href");
		return false;
	});
};