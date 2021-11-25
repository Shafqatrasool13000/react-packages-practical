import React,{useRef} from 'react'
import CountUp,{useCountUp} from 'react-countup'
const CounterUp = () => {
    const ref=useRef(null)
   const{countUp,start,pauseResume,reset,update}= useCountUp({
       ref:'counter',
       start: 0,
       end: 1234567,
       delay: 0,
       duration: 5,
       onStart: ({ pauseResume }) => console.log(pauseResume),
       startOnMount:false
    })
    return (
        <div>
            <h1>
                <span id='counter'>0</span>
            <button onClick={start}>start</button>
            <button onClick={reset}>reset</button>
            <button onClick={pauseResume}>pauseResume</button>
            <button onClick={()=>update(2000)}>update</button>
            </h1>
            <br />
            <CountUp end={200} />
            <br />
            <h1>
            <CountUp end={200} duration={5}/>
            </h1>
            <br />
            <h1>
            <CountUp start={300} end={1000} duration={5} />
            </h1>
            <h1>
            <CountUp prefix="$" start={300} decimals={2} end={1000} duration={5} />
            </h1>
            <h1>
            <CountUp suffix="USD" start={300} decimals={2} end={1000} duration={5} />
            </h1>
        </div>
    )
}

export default CounterUp
