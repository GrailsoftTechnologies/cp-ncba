import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';

const testString = "This is a post. I'm posting things. Also adding a picture. Its pretty cool.<br />\n<span style=\"background-color: white; font-family: &quot;open sans&quot; , &quot;arial&quot; , sans-serif; font-size: 14px; text-align: justify;\"><br /></span>\n<span style=\"background-color: white; font-family: &quot;open sans&quot; , &quot;arial&quot; , sans-serif; font-size: 14px; text-align: justify;\"><br /></span>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"https://2.bp.blogspot.com/-7s6yNWaPWCE/W0kU0JAGpnI/AAAAAAAAAiE/ogG68YFkfu0IkQ_kM5_PoeM6BH2mdI5ggCLcBGAs/s1600/2018-07-03%2B11.28.36.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" data-original-height=\"1070\" data-original-width=\"1600\" height=\"213\" src=\"https://2.bp.blogspot.com/-7s6yNWaPWCE/W0kU0JAGpnI/AAAAAAAAAiE/ogG68YFkfu0IkQ_kM5_PoeM6BH2mdI5ggCLcBGAs/s320/2018-07-03%2B11.28.36.jpg\" width=\"320\" /></a></div>\n<span style=\"background-color: white; font-family: &quot;open sans&quot; , &quot;arial&quot; , sans-serif; font-size: 14px; text-align: justify;\"><br /></span>";

class Reviews extends Component {
render() {
  return(
  	<div>
			<p>Reviews</p>
			<p>{ReactHtmlParser(testString)}</p>
		</div>
    );
  }
}

export default Reviews;
