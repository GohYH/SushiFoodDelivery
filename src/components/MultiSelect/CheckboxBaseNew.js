import React, { useState } from 'react';

// Group A, B & C checkbox with a submit button to validate 3 groups of input
const CheckboxBaseNew = () => {

  // Group-A
  const [isCheckedAone, setisCheckedAone] = useState(false);
  const [isCheckedAtwo, setisCheckedAtwo] = useState(false);
  const [isCheckedAthree, setisCheckedAthree] = useState(false);
  const [isCheckedAfour, setisCheckedAfour] = useState(false);
  const [count, setCount] = useState(0);
  const [isTick, setisTick] = useState(false);
  const[isDisabledA, setisDisabledA] = useState(false);

// Group-B
  const [isCheckedBone, setisCheckedBone] = useState(false);
  const [isCheckedBtwo, setisCheckedBtwo] = useState(false);
  const [isCheckedBthree, setisCheckedBthree] = useState(false);
  const [isCheckedBfour, setisCheckedBfour] = useState(false);
  const [isCheckedBfive, setisCheckedBfive] = useState(false);
  const [isCheckedBsix, setisCheckedBsix] = useState(false);
  const [isCheckedBseven, setisCheckedBseven] = useState(false);
  const [isCheckedBeight, setisCheckedBeight] = useState(false);
  const [isCheckedBnine, setisCheckedBnine]= useState(false);
  const [isCheckedBten, setisCheckedBten] = useState(false);
  const [isCheckedBeleven, setisCheckedBeleven] = useState(false);
  const [isCheckedBtwelve, setisCheckedBtwelve] = useState(false);
  const [isCheckedBthirteen, setisCheckedBthirteen] = useState(false);

  const [countB, setcountB] = useState(0);
  const [isTickB, setisTickB] = useState(false);
  const[isDisabledB, setisDisabledB] = useState(false);
// Group-C
const [isCheckedCone, setisCheckedCone] = useState(false);
const [isCheckedCtwo, setisCheckedCtwo] = useState(false);
const [isCheckedCthree, setisCheckedCthree] = useState(false);
const [isCheckedCfour, setisCheckedCfour] = useState(false);
const [isCheckedCfive, setisCheckedCfive] = useState(false);
const [isCheckedCsix, setisCheckedCsix] = useState(false);
const [isCheckedCseven, setisCheckedCseven] = useState(false);
const [isCheckedCeight, setisCheckedCeight] = useState(false);
const [isCheckedCnine, setisCheckedCnine]= useState(false);

const [countC, setcountC] = useState(0);
const [isTickC, setisTickC] = useState(false);
const[isDisabledC, setisDisabledC] = useState(false);

const[isSubmit, setIsSubmit] = useState(false);

// const[username, setUsername] = useState("");
// OrderConfirmation.js
const[orderId, setorderId] = useState(0);
const[isDisabledD, setisDisabledD] = useState(true);
const[isSubmitid, setIsSubmitid] = useState(false);

// Group-1: A
  // #1
// isTick true or false to trigger count+1 or count-1
  const setisCheckedAoneHandler = (isTick) => {

    if(!isCheckedAone){
        setCount(count+1)
        setisTick(true)
        if(count===1) setisDisabledA(true)
} else {
      setCount(count-1)
      setisTick(false)
}
setisCheckedAone(!isCheckedAone);
}
  // #2
const setisCheckedAtwoHandler = (isTick) => {
      if(!isCheckedAtwo){
        setCount(count+1)
        setisTick(true)
        if(count===1) setisDisabledA(true)
    } else {
      setCount(count-1)
      setisTick(false)
    }
    setisCheckedAtwo(!isCheckedAtwo);
}
  // #3
  const setisCheckedAthreeHandler = (isTick) => {
    if(!isCheckedAthree){
      setCount(count+1)
      setisTick(true)
      if(count===1) setisDisabledA(true)
  } else {
    setCount(count-1)
    setisTick(false)
  }
  setisCheckedAthree(!isCheckedAthree);
}
  // #4
  const setisCheckedAfourHandler = (isTick) => {
    if(!isCheckedAfour){
      setCount(count+1)
      setisTick(true)
      if(count===1) setisDisabledA(true)
  } else {
    setCount(count-1)
    setisTick(false)
  }
  setisCheckedAfour(!isCheckedAfour);
}
// Group-B
  // #1
  const setisCheckedBoneHandler = (isTickB) => {

    if(!isCheckedBone){
        setcountB(countB+1)
        setisTickB(true)
        if(countB===6) setisDisabledB(true)
} else {
      setcountB(countB-1)
      setisTickB(false)
}
setisCheckedBone(!isCheckedBone);
}
  // #2
const setisCheckedBtwoHandler = (isTickB) => {
      if(!isCheckedBtwo){
        setcountB(countB+1)
        setisTickB(true)
        if(countB===6) setisDisabledB(true)
    } else {
      setcountB(countB-1)
      setisTickB(false)
    }
    setisCheckedBtwo(!isCheckedBtwo);
}
  // #3
  const setisCheckedBthreeHandler = (isTickB) => {
    if(!isCheckedBthree){
      setcountB(countB+1)
      setisTickB(true)
      if(countB===6) setisDisabledB(true)
  } else {
    setcountB(countB-1)
    setisTickB(false)
  }
  setisCheckedBthree(!isCheckedBthree);
}
  // #4
  const setisCheckedBfourHandler = (isTickB) => {
    if(!isCheckedBfour){
      setcountB(countB+1)
      setisTickB(true)
      if(countB===6) setisDisabledB(true)
  } else {
    setcountB(countB-1)
    setisTickB(false)
  }
  setisCheckedBfour(!isCheckedBfour);
}
// #5
const setisCheckedBfiveHandler = (isTickB) => {
  if(!isCheckedBfive){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBfive(!isCheckedBfive);
}
// #6
const setisCheckedBsixHandler = (isTickB) => {
  if(!isCheckedBsix){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBsix(!isCheckedBsix);
}
// #7
const setisCheckedBsevenHandler = (isTickB) => {
  if(!isCheckedBseven){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBseven(!isCheckedBseven);
}
// #8
const setisCheckedBeightHandler = (isTickB) => {
  if(!isCheckedBeight){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBeight(!isCheckedBeight);
}
// #9
const setisCheckedBnineHandler = (isTickB) => {
  if(!isCheckedBnine){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBnine(!isCheckedBnine);
}
// #10
const setisCheckedBtenHandler = (isTickB) => {
  if(!isCheckedBten){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBten(!isCheckedBten);
}
// #11
const setisCheckedBelevenHandler = (isTickB) => {
  if(!isCheckedBeleven){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBeleven(!isCheckedBeleven);
}
// #12
const setisCheckedBtwelveHandler = (isTickB) => {
  if(!isCheckedBtwelve){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBtwelve(!isCheckedBtwelve);
}

// #13
const setisCheckedBthirteenHandler = (isTickB) => {
  if(!isCheckedBthirteen){
    setcountB(countB+1)
    setisTickB(true)
    if(countB===6) setisDisabledB(true)
} else {
  setcountB(countB-1)
  setisTickB(false)
}
setisCheckedBthirteen(!isCheckedBthirteen);
}
// Group-C
const setisCheckedConeHandler = (isTickC) => {

  if(!isCheckedCone){
      setcountC(countC+1)
      setisTickC(true)
      if(countC===1) setisDisabledC(true)
} else {
    setcountC(countC-1)
    setisTickC(false)
}
setisCheckedCone(!isCheckedCone);
}
// #2
const setisCheckedCtwoHandler = (isTickC) => {
    if(!isCheckedCtwo){
      setcountC(countC+1)
      setisTickC(true)
      if(countC===1) setisDisabledC(true)
  } else {
    setcountC(countC-1)
    setisTickC(false)
  }
  setisCheckedCtwo(!isCheckedCtwo);
}
// #3
const setisCheckedCthreeHandler = (isTickC) => {
  if(!isCheckedCthree){
    setcountC(countC+1)
    setisTickC(true)
    if(countC===1) setisDisabledC(true)
} else {
  setcountC(countC-1)
  setisTickC(false)
}
setisCheckedCthree(!isCheckedCthree);
}
// #4
const setisCheckedCfourHandler = (isTickC) => {
  if(!isCheckedCfour){
    setcountC(countC+1)
    setisTickC(true)
    if(countC===1) setisDisabledC(true)
} else {
  setcountC(countC-1)
  setisTickC(false)
}
setisCheckedCfour(!isCheckedCfour);
}
// #5
const setisCheckedCfiveHandler = (isTickC) => {
if(!isCheckedCfive){
  setcountC(countC+1)
  setisTickC(true)
  if(countC===1) setisDisabledC(true)
} else {
setcountC(countC-1)
setisTickC(false)
}
setisCheckedCfive(!isCheckedCfive);
}
// #6
const setisCheckedCsixHandler = (isTickC) => {
if(!isCheckedCsix){
  setcountC(countC+1)
  setisTickC(true)
  if(countC===1) setisDisabledC(true)
} else {
setcountC(countC-1)
setisTickC(false)
}
setisCheckedCsix(!isCheckedCsix);
}
// #7
const setisCheckedCsevenHandler = (isTickC) => {
if(!isCheckedCseven){
  setcountC(countC+1)
  setisTickC(true)
  if(countC===1) setisDisabledC(true)
} else {
setcountC(countC-1)
setisTickC(false)
}
setisCheckedCseven(!isCheckedCseven);
}
// #8
const setisCheckedCeightHandler = (isTickC) => {
if(!isCheckedCeight){
  setcountC(countC+1)
  setisTickC(true)
  if(countC===1) setisDisabledC(true)
} else {
setcountC(countC-1)
setisTickC(false)
}
setisCheckedCeight(!isCheckedCeight);
}
// #9
const setisCheckedCnineHandler = (isTickC) => {
if(!isCheckedCnine){
  setcountC(countC+1)
  setisTickC(true)
  if(countC===1) setisDisabledC(true)
} else {
setcountC(countC-1)
setisTickC(false)
}
setisCheckedCnine(!isCheckedCnine);
}
// Main button Click
const submitHandler = () => {
  // validate Group-1 checkbox
  if(count===0){
    alert('Base: must select 1 item')

    // validate Group-2 checkbox
  } else if(countB<=4){
    alert('Essential: must select min 5 items')

  // validate Group-3 checkbox
  } else if(countC===0){
    alert('Sprinkle: must select min 1 item')
    
  }else {
    setIsSubmit(true);
    // Get order Confirmation - set false so it can be clicked after this function click is done
    setisDisabledD(false);
    alert('Selection accepted! you may review & click confirm order to complete this order')
  }
}

// Get confirmation ID
const orderidHandler = ({orderId}) => {
        
  var orderId = Math.floor(Math.random() * 1000000)
  
  setorderId(orderId)
  alert('Order ID:' + orderId  + '\n Your order has been received');
  
   setIsSubmitid(true);
   setisDisabledD(true);
}

  return (
        <div>
            
            <div className="d-lg-flex justify-content-evenly">
              <div style={groupOne}> 
                  <h5 className={"pb-2"} style={groupText}> Base - choosen: {count} / (1 min - 2 max)</h5>
                <div style={checkedContainerTop}>
                  <div style={checkedContainer}>
                  <h6 > 
                  <input
                  className={"mt-2"}
                    type="checkbox"
                    name="Cold pasta"
                    disabled={isDisabledA}
                    value={isCheckedAone}
                    onChange={setisCheckedAoneHandler}
                    onClick={setisTick}
                  />

                  </h6>
                  <h6 > 
                  <input       
                    type="checkbox"
                    name="Cold pasta"
                    disabled={isDisabledA}
                    value={isCheckedAtwo}
                    onChange={setisCheckedAtwoHandler}
                    onClick={setisTick}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Cold pasta"
                    disabled={isDisabledA}
                    value={isCheckedAthree}
                    onChange={setisCheckedAthreeHandler}
                    onClick={setisTick}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Cold pasta"
                    disabled={isDisabledA}
                    value={isCheckedAfour}
                    onChange={setisCheckedAfourHandler}
                    onClick={setisTick}
                  />
                  </h6>
                </div>  
                {/* <div style={checkboxFontContainer}> */}
                <div>
                     <div className={"pb-1"}> Cold Pasta{isCheckedAone && <span>✔</span>}</div>
                     <div className={"pb-1"}> Cold Udon{isCheckedAtwo && <span>✔</span>}</div>
                     <div className={"pb-1"}> Cold Soba{isCheckedAthree && <span>✔</span>}</div>
                     <div className={"pb-1"}> Mixed Lettuce{isCheckedAfour && <span>✔</span>}</div>

                </div>        
          </div>
          </div> {/* groupOne End*/}
         
          {/* Group-2 */}
        <div style={groupTwo}>
                <div>
                    <h5 className={"pb-2"} style={groupText}> Essential - choosen: {countB} / (5 min - 7 max)</h5>
                  <div style={checkedContainerTop}>
                  <div style={checkedContainer}>
                  <h6 > 
                  <input
                  className={"mt-2"}
                    type="checkbox"
                    name="Edamame Beans"
                    disabled={isDisabledB}
                    value={isCheckedBone}
                    onChange={setisCheckedBoneHandler}
                    onClick={setisTickB}
                  />

                  </h6>
                  <h6 > 
                  <input       
                    type="checkbox"
                    name="Tempura Enoki Mushroom"
                    disabled={isDisabledB}
                    value={isCheckedBtwo}
                    onChange={setisCheckedBtwoHandler}
                    onClick={setisTickB}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Tuna Mayo"
                    disabled={isDisabledB}
                    value={isCheckedBthree}
                    onChange={setisCheckedBthreeHandler}
                    onClick={setisTickB}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Sweet Corn"
                    disabled={isDisabledB}
                    value={isCheckedBfour}
                    onChange={setisCheckedBfourHandler}
                    onClick={setisTickB}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Avocado"
                    disabled={isDisabledB}
                    value={isCheckedBfive}
                    onChange={setisCheckedBfiveHandler}
                    onClick={setisTickB}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Roasted Potato"
                    disabled={isDisabledB}
                    value={isCheckedBsix}
                    onChange={setisCheckedBsixHandler}
                    onClick={setisTickB}
                  />
                  </h6>

                  <h6> 
                  <input
                    className={"mt-1"}
                    type="checkbox"
                    name="Steamed Ebi"
                    disabled={isDisabledB}
                    value={isCheckedBseven}
                    onChange={setisCheckedBsevenHandler}
                    onClick={setisTickB}
                  />
                  </h6>

                  <h6> 
                  <input
                    className={"mt-1"}
                    type="checkbox"
                    name="Tamagoyaki(Japanese Omelette)"
                    disabled={isDisabledB}
                    value={isCheckedBeight}
                    onChange={setisCheckedBeightHandler}
                    onClick={setisTickB}
                  />
                  </h6>
                  <h6> 
                  <input
                    type="checkbox"
                    name="Shredded Cheese"
                    disabled={isDisabledB}
                    value={isCheckedBnine}
                    onChange={setisCheckedBnineHandler}
                    onClick={setisTickB}
                  />
                  </h6>
                  <h6> 
                  <input
                    type="checkbox"
                    name="Kani Stick(Crab Stick)"
                    disabled={isDisabledB}
                    value={isCheckedBten}
                    onChange={setisCheckedBtenHandler}
                    onClick={setisTickB}
                  />
                  </h6>
                  <h6> 
                  <input
                    className={"mt-1"}
                    type="checkbox"
                    name="Peaches"
                    disabled={isDisabledB}
                    value={isCheckedBeleven}
                    onChange={setisCheckedBelevenHandler}
                    onClick={setisTickB}
                  />
                  </h6>
                  <h6> 
                  <input
                    className={"mt-1"}
                    type="checkbox"
                    name="Oranges"
                    disabled={isDisabledB}
                    value={isCheckedBtwelve}
                    onChange={setisCheckedBtwelveHandler}
                    onClick={setisTickB}
                  />
                  </h6>
                  <h6> 
                  <input
                    type="checkbox"
                    name="Tomatoes"
                    disabled={isDisabledB}
                    value={isCheckedBthirteen}
                    onChange={setisCheckedBthirteenHandler}
                    onClick={setisTickB}
                  />
                  </h6>

                </div>  
                <div>
                    <div className={"pb-1"}>Edamame Beans{isCheckedBone && <span>✔</span>}</div>
                    <div className={"pb-1"}>Tempura Enoki Mushroom{isCheckedBtwo && <span>✔</span>}</div>
                    <div className={"pb-1"}>Tuna Mayor{isCheckedBthree && <span>✔</span>}</div>
                    <div className={"pb-1"}>Sweet Corn{isCheckedBfour && <span>✔</span>}</div>
                    <div className={"pb-1"}>Avocado{isCheckedBfive && <span>✔</span>}</div>
                    <div className={"pb-1"}>Roasted Potato{isCheckedBsix && <span>✔</span>}</div>
                    <div className={"pb-1"}>Steamed Ebi{isCheckedBseven && <span>✔</span>}</div>
                    <div className={"pb-1"}>Tamagoyaki{isCheckedBeight && <span>✔</span>}</div>
                    <div className={"pb-1"}>Shredded Cheese{isCheckedBnine && <span>✔</span>}</div>
                    <div className={"pb-1"}>Kani Stick(Crab){isCheckedBten && <span>✔</span>}</div>
                    <div className={"pb-1"}>Peaches{isCheckedBeleven && <span>✔</span>}</div>
                    <div className={"pb-1"}>Oranges{isCheckedBtwelve && <span>✔</span>}</div>
                    <div className={"pb-1"}>Tomatoes{isCheckedBthirteen && <span>✔</span>}</div>
                </div>
              </div>
            </div>   {/* group2 end */}
            </div>
          {/* Group-C */}
          <div style={groupThree}> 
              <div>
                    <h5 className={"pb-2"} style={groupText}> Sprinkle - choosen: {countC} / (1 min - 2 max)</h5>
               <div style={checkedContainerTop}>
                  <div style={checkedContainer}>
                  <h6 > 
                  <input
                  className={"mt-2"}
                    type="checkbox"
                    name="Turkey Bacon Bits"
                    disabled={isDisabledC}
                    value={isCheckedCone}
                    onChange={setisCheckedConeHandler}
                    onClick={setisTickC}
                  />

                  </h6>
                  <h6 > 
                  <input       
                    type="checkbox"
                    name="Roasted Almond Flakes"
                    className={"mt-sm-1 mt-3"}
                    disabled={isDisabledC}
                    value={isCheckedCtwo}
                    onChange={setisCheckedCtwoHandler}
                    onClick={setisTickC}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Nori Strips(Seaweed)"
                    className={"mt-sm-1 mt-4"}
                    disabled={isDisabledC}
                    value={isCheckedCthree}
                    onChange={setisCheckedCthreeHandler}
                    onClick={setisTickC}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Chisken Floss"
                    className={"mt-sm-1 mt-3"}
                    disabled={isDisabledC}
                    value={isCheckedCfour}
                    onChange={setisCheckedCfourHandler}
                    onClick={setisTickC}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Okaka Furikake"
                    disabled={isDisabledC}
                    value={isCheckedCfive}
                    onChange={setisCheckedCfiveHandler}
                    onClick={setisTickC}
                  />
                  </h6>

                  <h6> 
                  <input
                    type="checkbox"
                    name="Golden Tempura Crunch"
                    className={"mt-sm-1 mt-3"}
                    disabled={isDisabledC}
                    value={isCheckedCsix}
                    onChange={setisCheckedCsixHandler}
                    onClick={setisTickC}
                  />
                  </h6>

                  <h6> 
                  <input
                    className={"mt-1"}
                    type="checkbox"
                    name="Dried Cranberries"
                    className={"mt-sm-1 mt-3"}
                    disabled={isDisabledC}
                    value={isCheckedCseven}
                    onChange={setisCheckedCsevenHandler}
                    onClick={setisTickC}
                  />
                  </h6>

                  <h6> 
                  <input
                    className={"mt-1"}
                    type="checkbox"
                    name="Sapphire Raisins"
                    disabled={isDisabledC}
                    value={isCheckedCeight}
                    onChange={setisCheckedCeightHandler}
                    onClick={setisTickC}
                  />
                  </h6>
                  <h6> 
                  <input
                    type="checkbox"
                    name="Bonito Fish Flakes"
                    disabled={isDisabledC}
                    value={isCheckedCnine}
                    onChange={setisCheckedCnineHandler}
                    onClick={setisTickC}
                  />
                  </h6>
            
                </div>  
               
                <div>
                    <div className={"pb-1"}>Turkey Bacon Bits{isCheckedCone && <span>✔</span>}</div>
                    <div className={"pb-1"}>Roasted Almond Flakes{isCheckedCtwo && <span>✔</span>}</div>
                    <div className={"pb-1"}>Nori Strips(Seaweed){isCheckedCthree && <span>✔</span>}</div>
                    <div className={"pb-1"}>Chicken Floss{isCheckedCfour && <span>✔</span>}</div>
                    <div className={"pb-1"}>Okaka Furikake{isCheckedCfive && <span>✔</span>}</div>
                    <div className={"pb-1"}>Golden Tempura Crunch{isCheckedCsix && <span>✔</span>}</div>
                    <div className={"pb-1"}>Dried Cranberries{isCheckedCseven && <span>✔</span>}</div>
                    <div className={"pb-1"}>Sapphire Raisins{isCheckedCeight && <span>✔</span>}</div>
                    <div className={"pb-1"}>Bonito Fish Flakes{isCheckedCnine && <span>✔</span>}</div>
                </div>

          </div>
        </div>  
        <div>
        </div> {/* group 3 end */}
       </div> 
    </div>  
                    <button
                    style={btn}
                    onClick={submitHandler}
                    // disabled button when submitted successfully
                    disabled={isSubmit}
                    >
                      Submit {isSubmit && <span>🔒</span>}
                    </button>  

                   <div className={"my-3"}>
                     {/* submit button when disabled display msg  */}
                     <div style={submitButtonMsg}>
                    {isSubmit && <h6 style={submitText}>The following are your choosen items</h6>}
                    </div>
                      {isSubmit && <h6 style={choosenItemText}>Base</h6>}
                      <span>{isCheckedAone && <span>Cold Pasta, </span>}</span>  
                      <span>{isCheckedAtwo && <span>Cold Udon, </span>}</span>  
                      <span>{isCheckedAthree && <span>Cold Soba, </span>}</span>  
                      <span>{isCheckedAfour && <span>Mixed Lettuce, </span>}</span>  
                    </div>
                    <div className={"my-3"}>
                      {isSubmit && <h6 style={choosenItemText}>Essential</h6>}

                      <span>{isCheckedBone && <span>Edamame Beans, </span>}</span>  
                      <span>{isCheckedBtwo && <span>Tempura Enoki Mushroom, </span>}</span>  
                      <span>{isCheckedBthree && <span>Tuna Mayor, </span>}</span>  
                      <span>{isCheckedBfour && <span>Sweet Corn, </span>}</span>  
                      <span>{isCheckedBfive && <span>Avocado, </span>}</span>  
                      <span>{isCheckedBsix && <span>Roasted Potato, </span>}</span>  
                      <span>{isCheckedBseven && <span>Steamed Ebi, </span>}</span>  
                      <span>{isCheckedBeight && <span>Tamagoyaki, </span>}</span>  
                      <span>{isCheckedBnine && <span>Shredded Cheese, </span>}</span>  
                      <span>{isCheckedBten && <span>Kani Stick(Crab Stick), </span>}</span>  
                      <span>{isCheckedBeleven && <span>Peaches, </span>}</span>  
                      <span>{isCheckedBtwelve && <span>Oranges, </span>}</span>  
                      <span>{isCheckedBthirteen && <span>Tomatoes, </span>}</span>  
                    </div>
                    <div>
                    {isSubmit && <h6 style={choosenItemText}>Sprinkle</h6>}

                    <span>{isCheckedCone && <span>Turkey Bacon Bits, </span>}</span>  
                      <span>{isCheckedCtwo && <span>Roasted Almond Flakes, </span>}</span>  
                      <span>{isCheckedCthree && <span>Nori Strips(Seaweed), </span>}</span>  
                      <span>{isCheckedCfour && <span>Chicken Floss, </span>}</span>  
                      <span>{isCheckedCfive && <span>Okaka Furikake, </span>}</span>  
                      <span>{isCheckedCsix && <span>Golden Tempura Crunch, </span>}</span>  
                      <span>{isCheckedCseven && <span>Dried Cranberries, </span>}</span>  
                      <span>{isCheckedCeight && <span>Sapphire Raisins, </span>}</span>  
                      <span>{isCheckedCnine && <span>Bonito Fish Flakes, </span>}</span>  

                    </div>
                  {/* order confirmation get ID */}
                  <div style={orderIdContainer}>
           
           <button
               disabled={isDisabledD}
               style={btnGetId}
               onClick={orderidHandler}
               >
              
               Confirm Order{isSubmitid && <span>🔒</span>}
           </button> 
           <h5 className={"mt-3"}>
               Order ID: {orderId}
           </h5>
           <h5>
               {isSubmitid && <h6>Order Status: Received ✔</h6>}
               {isSubmitid && <h6 style={orderReceived}>Thank you for your order! We'll deliver it to you shortly!</h6>}
           </h5>          
       </div>
    </div> 
                    
  )
}

const groupOne={
  boxShadow: 'var(--shadow)',
  padding:'15px',
  borderRadius:'5px',
  marginLeft:'1.5%',
  marginRight:'1.5%',
  marginBottom:'4%',

}
const groupTwo={
  boxShadow: 'var(--shadow)',
  padding:'15px',
  borderRadius:'5px',
  marginLeft:'1.5%',
  marginRight:'1.5%',
  marginBottom:'4%',
  // fontWeight:'2vw',
}

const groupThree={
  boxShadow: 'var(--shadow)',
  padding:'15px',
  borderRadius:'5px',
  marginLeft:'1.5%',
  marginRight:'1.5%',
  marginBottom:'4%',
}

const groupText ={
  borderBottom:'1px double #B8B8B8',
  
}
// arrange checkbox side by side with label
const checkedContainerTop = {
  display:'flex',
  flexDirection: 'row',
}

const checkedContainer = {
  display:'flex',
  flexDirection: 'column',
  marginRight:'20px',
}

const btn = {
  marginTop: '20px',
  marginBottom: '20px',
  padding:'5px',
  width: '120px',
  backgroundColor:'darkSlategray',
  color:'white',
  borderRadius:'5px',

}
const submitButtonMsg = {
  marginBottom: '15px',
  backgroundColor:'darkSlategray',
  padding:'8px',
  borderRadius:'6px',
  textAlign:'center',
}

const submitText = {
  fontWeight:'bold',
  color:'white',
}

const choosenItemText ={
  fontWeight:'bold',

}
const orderIdContainer = {
  width:'380px',
   fontSize:'17px',
}

const btnGetId = {
  marginTop: '20px',
  width: '150px',
  backgroundColor:'darkSlategray',
  color:'white',
  borderRadius:'5px',
  paddingTop:'5px',
  paddingBottom:'5px',
}

const orderReceived = {
 width:'70%',
}
export default CheckboxBaseNew

