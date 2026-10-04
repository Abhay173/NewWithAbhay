import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc, url, newsurl} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
  <img src={url} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}...</p>
    <a href={newsurl} target = "_blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
     
    )
  }
}

export default NewsItem
