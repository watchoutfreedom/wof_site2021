import Utterances from "utterances-react"
// export default Comments({ data }) => {
//   return (
//     <Utterances
//       repo="watchoutfreedom/wof_site2021"
//       issueTerm="url"
//       label="Comment"
//       theme="github-light"
//       crossorigin="anonymous"
//       async={false}
//       style={`
//       & .utterances {
//         max-width: 950px;
//       }
//     `}
//     />
//   )
// }

import React, {Component} from "react";

export default class Comments extends Component {

  componentDidMount () {
      let script = document.createElement("script");
      let anchor = document.getElementById("inject-comments-for-uterances");
      script.setAttribute("src", "https://utteranc.es/client.js");
      script.setAttribute("crossorigin","anonymous");
      script.setAttribute("async", true);
      script.setAttribute("repo", "watchoutfreedom/wof_site2021");
      script.setAttribute("issue-term", "title");
      script.setAttribute( "theme", "github-light");
      anchor.appendChild(script);
  }

  render() {
    return (
        <div id="inject-comments-for-uterances"></div>
    );
  }
}
