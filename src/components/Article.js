import React, {PureComponent} from 'react'

class Article extends PureComponent // наследует компонент
{
constructor(props) //задаем начальное состояние
{
super(props) //вызываем родительский конструктор
this.state = {
  count: 0
}
}

// shouldComponentUpdate(nextProps, nextState)
// {
// return this.state.isOpen !== nextState.isOpen
// }

componentWillMount() //error???????? писать нужно НЕ в конструкторе!!!
{
  console.log('---', 'mounting')
}

// state = {
//   isOpen: true
// }

//this.handleClick = handleClick.bind(this)

// componentWillReceiveProps(nextProps)  
// {
// //console.log('---', 'will receive props')

// if(nextProps.defaultOpen !== this.props.defaultOpen)
// this.setState(
//   {
//     isOpen: nextProps.defaultOpen
//   }
// )
// }

componentWillUpdate()
{
  console.log('---', 'will update')
}

render() //метод, который нужно обязательно реализовать, отвечает за то, как должен выглядит компонент
 {
  const {article, isOpen, onButtonClick} = this.props
  const body = isOpen && <section className="card-text">{article.text}</section>
  //const style = {width:'50%'}
  return(
    <div className="card mx-auto" style = {{width:'50%'}}>
    <div className="card-header">
      <h2 onClick = {this.incrementCounter}>
      {article.title}
      clicked {this.state.count}
      <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
      {isOpen ? 'close' : 'open'}
      </button>
      </h2>
      </div>
      <div className="card-body">
      <h6 className="card-subtitle text-muted">
        creation date: {(new Date(article.date)).toDateString()}
      </h6>
          {body}
      </div>
    
      
      </div>
  )
  }

incrementCounter = () =>{
  this.setState (
    {
      count: this.state.count+1
    }
  )
}

//   handleClick = () => {
//   //console.log('---', 'clicked')
//   // this.setState(
//   //   {
//   //     isOpen: !this.state.isOpen
//   //   }
//   // )
// }
}




// function handleClick()
// {
//   console.log('---', 'clicked')
// }

export default Article