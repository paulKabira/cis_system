import React from 'react';
import Linker from './linker.jsx';
class DefaultLayout extends React.Component{
  render(){
    var cssls = [];
    for(var i=0 , len = (this.props.csslinks || 0 ? this.props.csslinks.length : 0) ; i<len ; i++){
      cssls.push(<Linker urls={this.props.csslinks[i]} key={i} />);
    };
    return(
      <html>
        <head>
        <link rel="stylesheet" href="./css/default.css"></link>
          {cssls.length ? cssls :null}
          <script type="text/javascript" src="./js/submit.js"></script>
          <title>CIS | {this.props.title}</title>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}
export default DefaultLayout;
