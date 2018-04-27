function getData() {

document.write('<table><tr>')
var convert = JSON.parse(teamMembers);

	for (var i=0; i < convert.length; i++) {
		var temp = convert[i];

		document.write("<td><figure>");
		document.write('<img src="' + temp.image + '" width=\"300px\" height=\"300px\">');
		document.write("<figcaption><br>" + temp.name + "<br>" + temp.email + "</figcaption>")
		document.write("</figure></td>"); 
	}

document.write("</tr></table>"); 
}

getData();