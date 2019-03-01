import React, {PureComponent, Component} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends Component
{
    state ={
        openArticleId: null
    }
    render()
    {
        console.log('---', 2)
        const articleElements = this.props.articles.map((article, index) => 
    <li key = {article.id} className = "article-list_li" >
    <Article article = {article} 
    isOpen = {this.state.openArticleId === article.id}
    onButtonClick = {this.handleClick.bind(this, article.id)}
    />
    </li>) //two children with the same key??????
return (
    <ul>
        {articleElements}
    </ul>
)
}
handleClick = openArticleId => this.setState({ 
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
})

}

// export default function ArticleList ({articles})
// {
// const articleElements = articles.map((article, index) => 
//     <li key = {article.id} className = "article-list_li">
//     <Article article = {article} defaultOpen = {index===0}/>
//     </li>) //two children with the same key??????

