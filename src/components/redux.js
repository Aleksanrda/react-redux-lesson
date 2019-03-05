function counter(state, action){
  if(action.type === 'Increment')
    {
      return state + 1;
    }
  else if(action.type === 'Decrement')
    {
      return state - 1;
    }
}

expect(
counter(0, {type: "Increment"})
).toEqual(1);

expect(
counter(1, {type: "Increment"})
).toEqual(2);

expect(
counter(2, {type: "Decrement"})
).toEqual(1);

expect(
counter(1, {type: "Decrement"})
).toEqual(0);

console.log('Tests passed!');
