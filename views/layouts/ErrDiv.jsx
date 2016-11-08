import React from 'react'
class ErrDiv extends React.Component{
  render(){
    return(
      <div className="errdiv" id="errordiv"><script type="text/javascript" src="./js/errordiv.js"></script>
          <div id="insideerror">
            <p className="errorhead">{(this.props.msghead || 0)? this.props.msghead : "Error!" }</p>
            <p className="errorbody">{this.props.message}</p>
            <a className= "errbtn" href="javascript: hide()">OK!</a>
          </div>
      </div>
    )
  }
}
export default ErrDiv;
