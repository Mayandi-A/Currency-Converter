import React from 'react'
import { useState} from 'react'
import './Currency.css'
export default function Currency() {
    const [from, setFrom]=useState("usd")
    const [to, setTo]=useState("ind")
    const [amnt, setAmnt]=useState(0)
    const [res, setRes]=useState(0)
    const rates={
        ind :1,
        usd:1/85.58,
        euro: 0.0099,
        peso: 1 / 4.55
    };
    const convert =(amt,from, to)=>{
        const val2=amt/rates[from];
        const val3=val2*rates[to];
        setRes(val3.toFixed(2));
    }
    const convert3 =(amt,from, to)=>{
        const val2=amt/rates[to];
        const val3=val2*rates[from];
        setAmnt(val3.toFixed(2));
    }
    const handleChange =(e) =>{
        const val=e.target.value
        setAmnt(val)
        convert(val,from,to)
    }
    const handleChange2 =(e) =>{
        const val=e.target.value
        setRes(val)
        convert3(val,from,to)
    }
    const handleFrom=(e)=>{
        const val=e.target.value
        setFrom(val);
        convert(amnt,val,to)
    }
    const handleTo=(e)=>{
        const val=e.target.value
        setTo(val);
        convert(amnt,from,val)
    }
  return (
    <div className='xx'>
      <form>
        <h1>Currency Converter :</h1>
        <select className="sel" value={from} onChange={handleFrom}>
            <option value="ind">
                ind
            </option>
            <option value="usd">
                usd
            </option><option value="euro">
                euro
            </option>
            <option value="peso">
                peso
            </option>
        </select>
        <input type='number' value={amnt} onChange={handleChange}/>
        <br />
        <select className="sel" value={to} onChange={handleTo}>
            <option value="ind">
                ind
            </option>
            <option value="usd">
                usd
            </option><option value="euro">
                euro
            </option>
            <option value="peso">
                peso
            </option>
        </select><input type='number' value={res} onChange={handleChange2}/>
        
        
      </form>
    </div>
  )
}
