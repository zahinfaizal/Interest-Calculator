import { useState } from 'react';
import './App.css';
import { TextField,Stack,Button } from '@mui/material';



function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setIsPrincipleValid] = useState(true)
  const [isRateValid,setIsRateValid] = useState(true)
  const [isYearValid,setIsYearValid] = useState(true)


  const validateInput = (e)=>{
    // /{key}=object
    const {name,value} = e.target
    // logic to check number validation - regular expression: /^[0-9]+$/
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(true)
      }else if(name==="year"){
        setYear(value)
        setIsYearValid(true)
      }
    }else{
      if(name==='principle'){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(false)
      }else if(name==="year"){
        setYear(value)
        setIsYearValid(false)
      }
    }
  }
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("please fill the form completely!!!")
    }else{
      setInterest(principle*rate*year/100)
    }
  }
  
  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true)
  }


  return (
    
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>

      <div style={{width:'500px'}} className='bg-light p-5 rounded'>
        <h3>Simple Interest App</h3>
        <p>Calculate Your Simple Interest Easily</p>
        <div style={{height:'150px'}} className="interested-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column
        text-light rounded shadow">
          <h1>$ {''} {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate}>
          
            <div className="mb-5">
              <TextField className='w-100' id="outlined-basic1" label="₹ Priciple amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>validateInput(e)}/>
            </div>
            {
              !isPrincipleValid &&
              <div className="mb-3 text-danger fw-bolder">
                  *Invalid User Input
              </div>

            }

            <div className="mb-5">
              <TextField className='w-100' id="outlined-basic2" label="Rate of interest (p.a)" variant="outlined" value={rate || ""} 
              name='rate' onChange={(e)=>validateInput(e)}/>
            </div>
            {
              !isRateValid &&
              <div className="mb-3 text-danger fw-bolder">
                  *Invalid User Input
              </div>

            }

            <div className="mb-5">
              <TextField className='w-100' id="outlined-basic3" label="Time period" variant="outlined" value={year || ""}
              name='year' onChange={(e)=>validateInput(e)}/>
            </div>
            {
              !isYearValid &&
              <div className="mb-3 text-danger fw-bolder">
                  *Invalid User Input
              </div>

            }

            <Stack className='mt-2' direction="row" spacing={2}>
                <Button type='submit' style={{height:'70px',width:'200px'}} variant="contained" disabled={isPrincipleValid && isYearValid && isRateValid?false:true}>CALCULATE</Button>
                <Button  style={{height:'70px',width:'200px'}} variant="outlined" onClick={handleReset}>RESET</Button>       
            </Stack>

        </form>

      </div>


    </div>
  );
}

export default App;
