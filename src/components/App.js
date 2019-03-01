import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent
{
  state = 
  {
    reverted: false
  }

 // articles = articles.slice() //создали локальную копию этого массива, для каждого компонента своя копия article

  render()
  {
    // const articlesList = this.state.reverted ? articles.reverse() : articles
    // console.log('---', 2, this.state, articles.map(article => article.id))
    console.log('---', 1)
 return (
  <div className="container">
  <div className="jumbotron">
     <h1 className="display-3">
        App Name
        <button className="btn" onClick = {this.revert}> 
          Revert
        </button>
      </h1>
  </div>
     
      <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles}/>
      </div>
  )
  }

  revert = () =>
  {
    //this.articles.reverse() //меняется направление, так делать нельзя, нельзя менять по ссылке внешние переменные 
     this.setState(
    {
    reverted: !this.state.reverted //флажок не влияет в даном случае
    }
  )
 
  }
   
}

export default App
