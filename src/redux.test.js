import { createStore } from 'redux'

function counter(state, action){
if(typeof state === 'undefined')
{
return 0;
}

  if(action.type === 'Increment')
    {
      return state + 1;
    }
  else if(action.type === 'Decrement')
    {
      return state - 1;
    }
    else 
    {
      return state;
    }
}

//const {createStore} = Redux; error
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => 
{
  store.dispatch({type : "Increment"})
}
)
// console.log(store.getState());
// store.dispatch({type: "Increment"})
// console.log(store.getState());
// store.dispatch({type: "Increment"})
// console.log(store.getState());
console.log('Tests passed!');

it('should return 1 if state is 0 action Increment', () => {
expect(
counter(0, {type: "Increment"})
).toEqual(1);
});

it('should return 2 if state is 1 action Increment', () => {
expect(
counter(1, {type: "Increment"})
 ).toEqual(2);
});

it('should return 1 if state is 2 action Decrement', () => {
expect(
  counter(2, {type: "Decrement"})
  ).toEqual(1);
});

it('should return 1 if state is 1 action Somth else', () => {
expect(
counter(1, {type: "Smth else"})
 ).toEqual(1);
});

it('should return 0 if state is undefined action {} }', () => {
expect(
counter(undefined, {})
 ).toEqual(0);
});