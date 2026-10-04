import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    constructor(){
    super();
     this.state = {
      articles : [],
      loading : true
     }

  }
  async componentDidMount () {
     console.log("cdm");
     let url = "https://newsdata.io/api/1/latest?apikey=pub_49113ab4bb1f4e5f9d2a6877bb1e1083&q=News";
     let data = await fetch(url);
     let parseData = await data.json();
     this.setState({articles: parseData.results});
   }
   
  render() {
 
    return (
      
      <div>
       <div className = "row"  >
        {this.state.articles.map((element) => {
         return <div className = "col-md-3" key = {element.article_id}>
        <NewsItem title = { element.title.slice(0,45)}  desc = {element.description.slice(0,80)} url = {element.image_url} newsurl = {element.url}/>  
        </div>
        })}
       
       </div>
      </div>
    )
  }
}

export default News
