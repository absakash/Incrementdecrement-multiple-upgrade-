import React, { useState } from "react";
import Count from "./components/Count";
import Counter from "./components/Counter";
import Total from "./components/Total";

const App = () => {
  const InitialCounter = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
  ];

  const [count, setCount] = useState(InitialCounter);
  // const total = count.reduce((sum, currect) => sum + currect.value, 0);

  const total=count.reduce((sum,current)=>sum+current.value,0)


  const handleIncrement = (counterId) => {
   
    // const updatedCount = count.map((counter) => {
    //   if (counter.id === counterId) {
    //     return {
    //       ...counter,
    //       value: counter.value + 1,
    //     };
    //   } else {
    //     return counter;
    //   }
    // });

    // setCount(updatedCount);

    const update=count.map((c)=>{
      if(c.id===counterId){
        return{
          ...c,
          value:c.value+1
        }
      }else{
        return c
      }
    })

    setCount(update)


  };

  const handleDecremnt = (counterId) => {
    const updatedCount = count.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      } else {
        return counter;
      }
    });

    setCount(updatedCount);
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto mt-10 mt-10">
        <h1 className="text-3xl font-bold text-center">
          Simple counter application{" "}
        </h1>


        {count.map((c) => (
          <Counter
            key={c.id}
            OnIncrement={() => handleIncrement(c.id)}
            OnDecrement={() => handleDecremnt(c.id)}
            count={c.value} // Use 'count' state here, not InitialCounter
          ></Counter>
        ))}

        <Total totalCount={total}></Total>
      </div>
    </div>
  );
};

export default App;
