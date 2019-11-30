import React , {useState, useMemo} from 'react';
import Child from './Child';

const UseMemoExample = () => {

    const [age, setAge] = useState(21);

    const onClickHandle = () => {
        setAge(age + 1)
    }

    // Need to send array blank to check, means it has no depedency on any state/passed variable
    const memoHandle = useMemo(() => {
        return <Child />
    }, [])

    // we have passed age, so now Child gonna check for render each n every time age changes
    // const memoHandle = useMemo(() => {
    //     return <Child />
    // }, [age])

    // useMemo : if we are passing same input to any component so it should return same output everytime
    // so we don't want to re-render our component again and again
    return (
        <div>
           <h1>Age: <span>{age}</span></h1> 
           <button onClick={onClickHandle}>Increase Age</button>
           <Child />
           <hr />
           <h3> Memo Child</h3>
           <div>
               {memoHandle}
           </div>
        </div>
    );
};

export default UseMemoExample;