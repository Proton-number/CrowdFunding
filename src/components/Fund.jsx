import React, { useEffect, useRef, useState } from 'react'
import bookmark from '/src/images/icon-bookmark.svg'
import mastercraft from '/src/images/logo-mastercraft.svg'
import iconclose from '/src/images/icon-close-modal.svg'
import check from '/src/images/icon-check.svg'
import menu from '/src/images/menu_FILL0_wght400_GRAD0_opsz48.svg'



function Fund() {
  const [toggle, setToggle] = useState(true);
  const [backed,setBacked] = useState(89)
  const[backers, setBackers] = useState(5)
  const[days, setDays] = useState(56)
  const [nopledge, setNopledge] = useState(true)
  const [bamboopledge, setBamboopledge] = useState(true)
  const [blackpledge, setBlackpledge] = useState(true)
const [checked, setChecked] = useState({pledgenothing:false, bamboo:false, black:false})
 const [givepledge, setGivepledge] =useState(false)
 const[showreward,setShowreward] = useState(true)


const input = useRef();
const input2 = useRef();

useEffect(() => {
  input.current.value = 25;
  input2.current.value = 75;
}, [] )

  const menuHandler = event => {
    setToggle(current => !current);
  }

   const closepledgeHandler = event => {
    setShowreward(current => !current)
    setBamboopledge(false)
    setBamboopledge(current => !current )
    setBlackpledge(false)
    setBlackpledge(current => !current)
   }
  
  const thankyouHandler = event => {
    setBacked(backed + 10)
    setBackers(backers + 6)
    setDays(days - 8 )
    setGivepledge(current => !current)
    setShowreward(current => !current)
    setBamboopledge(false)
    setBamboopledge(current => !current )
    setBlackpledge(false)
    setBlackpledge(current => !current)
  }

  const nopledgeHandler = event => {
      setNopledge(current => !current )
      setBamboopledge(true)
      setBlackpledge(true)
  }

  const bambooinputHandler = event => {
    setBamboopledge(current => !current )
    setNopledge(true)
    setBlackpledge(true)
    
  }
  

  const blackinputHandler = event => {
  setBlackpledge(current => !current)
  setNopledge(true)
  setBamboopledge(true)
  }

//Pledge reward//
const bamboorewardHandler = event => {
  setBamboopledge(current => !current )
  setChecked({pledgenothing:false, bamboo:true, black:false})
  setShowreward(current => !current)
}

const blackrewardHandler = event => {
  
  setBlackpledge(current => !current)
  setChecked({pledgenothing:false, bamboo:false, black:true})
  setShowreward(current => !current)
  
}

//end of pledge reward//

const changeRadio =(e) =>{
  setChecked(() => {
    return {
      pledgenothing: false,
      bamboo: false,
      black: false,
      [e.target.value]:true
    }
  } )
}

//pledge given//
  const givenPledge = event => {
    setGivepledge(current => !current)
  }


  return (
    <div>
      <header>
 <div className="navigation">


<h4>crowdfund</h4>

 

  <div>
    
<nav id='mobile'  >
  <ul style={{display: toggle ? 'none' : 'block' } }   >
  <li> <a href="#">About</a>  </li>     
      
      <li> <a href="#">Discover</a>  </li>
         
      <li> <a href="#">Get started</a> </li> 
  </ul>
  
   </nav>   
<div className="desktop-nav">
<nav >
<a href="#">About</a>
<a href="#">Discover</a>
<a href="#">Get started</a>
</nav>
</div>



  </div>

    
      <button  onClick={menuHandler} ><img src={menu} alt="" /></button>

 
    
 </div>


      </header>

      <main  >
        <div className="master-img">
        <img src={mastercraft} alt="mastercraft-logo" />
        </div>
     
      <div class="first-section">
    
    <div className="mastercraft" align='center'>
   
    <h2>MasterCraft Bamboo Monitor Riser</h2>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
    </div>
       
        
        <div id="bottom">
        <button>Back this Project</button>

          <div id="mark">
          <img src={bookmark} alt="bookmark" />
          <p>Bookmark</p>
          </div>
         
        </div>
      </div>
      
      
      <div className="second-section" >

<div className="price" >

<div className="border-right">
<div className="numbers" >
        <h2>$ {backed},968 </h2>
         <p>of $100,000 backed</p>
        </div>
</div>


        <div className='dash'></div>

        <div className="numbers" >
        <h2>${backers},009</h2>
        <p>total backers</p>
        </div>
    
       
        <div className='dash'></div>
 
     <div className="border-left">
     <div className="numbers" >
      <h2>{days}</h2>
      <p>days left</p>      
     </div>
      </div>


</div>
      
      
<div className="progress-container">
  <div className="progress-bar"></div>
</div>
  

      </div>
      
      <div className="third-section">
        
        <div id="words">
        <h2>About this project</h2>
       <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that 
        elevates your screen to a more comfortable viewing height. Placing your monitor 
        at eye level has the potential to improve your posture and make you more comfortable 
        while at work, helping you stay focused on the task at hand.</p>
       
       <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space
         below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
       
        </div>
      
       <div className="Bamboo-stand">

       <div className="words">
       <h3>Bamboo Stand</h3>
            <h4>Pledge $25 or more</h4>
           </div>
       
          
         
            <p>You get an ergonomic stand made of natural bamboo. 
            You've helped us launch our promotional
             campaign, and you'll be added to a special Backer member list.</p>

               <div className="select-reward">
                  <h2>101  <span>left</span> </h2>
                 <button onClick={bamboorewardHandler}>Select Reward</button>
                 </div>

       </div>

       <div className="Black-Edition">

       <div className="words">
       <h3>Black Edition Stand</h3>
            <h4>Pledge $75 or more</h4>
              </div>
        
      

            <p>You get a Black Special Edition computer stand and a personal thank you.
                 You'll be added to our Backer member list. Shipping is included.</p>

                 <div className="select-reward">
                  <h2>64 <span>left</span></h2>
                 <button onClick={blackrewardHandler}>Select Reward</button>
                 </div>

             </div>

             <div className="Mahogany-Edition">

                   <div className="words">
                   <h3>Mahogany Special Edition</h3>
            <h4>Pledge $200 or more</h4>
                     </div>
         

                <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. 
                    You'll be added to our Backer member list. Shipping is included.</p>

                    <div id="select-reward">
                  <h2>0 <span>left</span></h2>
                 <button>Out of Stock</button>
                 </div>


             </div>
        
      </div>
      
      
    </main>


  <aside className='reward-expansion' style={{display:  showreward ? 'none' : 'block' } } >

<div className="space"  >



<div className="back-project">
  <h3>Back this Project </h3>
<button onClick={closepledgeHandler}  >  <img src={iconclose} alt="close-icon" /></button>
  </div>
  <p id='support' > Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

<div className="pledge-reward">

                      <div className="pledge-nothing">

                      <div className="no-pledge">
                      <input 
                      type="radio" 
                       onClick={nopledgeHandler}
                   value="pledgenothing"
                     checked={checked.pledgenothing} 
                     onChange ={changeRadio}
                        />
       <h3>Pledge with no reward</h3>
</div>


      <p>Choose to support us without a reward if you simply believe in our project.
           As a backer, you will be signed up to receive product updates via email </p>

     <div className="enter-pledge" style={{display:  nopledge ? 'none' : 'block' } } >
    
    

         <div className="pledge-amount"  >
         <p align='center' > Enter your pledge</p>
          <div className='input-payment'align='center' >
<div className="payment">
<span>$</span>
         <input type="number"  ref={input} />
</div>
           
         
         <button onClick={givenPledge}>Continue</button>

          </div>
         
         
 
         </div>
     
        </div>

                    </div>
       

        <div className="bamboo-pledge">

<div className="pledge-money">
<input 
type="radio"
  onClick={bambooinputHandler} 
  value="bamboo"
    checked={checked.bamboo} 
      onChange ={changeRadio }
  />
<h3>Bamboo Stand</h3>
<h4>Pledge $25 or more</h4>
</div>
<p><b>101</b> <span>left</span> </p>


<p>You get an ergonomic stand made of natural bamboo. 
  You've helped us launch our promotional campaign, and you'll be added to
   a special Backer member list.
 </p>

  <div className="enter-pledge" style={{display:  bamboopledge ? 'none' : 'block' } }  >
  

    <div className="pledge-amount">
    <p align='center' > Enter your pledge</p>
 <div className='input-payment' align='center' >
  <div className='payment'>
  <span>$</span>
    <input type="number"  ref={input} />
  </div>
 
    <button onClick={givenPledge}>Continue</button>
 </div>

   
    

    </div>
   
   </div>


  </div>



  <div className="black-pledge">
      
      <div className="pledge-money">
<input 
type="radio"
 onClick={blackinputHandler}
 value="black"
    checked={checked.black} 
      onChange ={changeRadio }
  />
<h3>Black Edition Stand</h3>
<h4>Pledge $75 or more</h4>

</div>

<p><b>64</b> <span>left</span> </p>

<p>You get a Black Special Edition computer stand and a personal thank you.
   You'll be added to our Backer member list. Shipping is included.
 </p>

  <div className="enter-pledge" style={{display:  blackpledge ? 'none' : 'block' } }  >
  
    <div className="pledge-amount">
    <p align='center' > Enter your pledge</p>

      <div className="input-payment" align='center' >
        <div className='payment'>
        <span>$</span>
    <input type="number"  ref={input2} />
        </div>
     
    <button onClick={givenPledge}>Continue</button>
      </div>
   
   

    </div>

    </div>
   
  </div>

<div className="Maho-pledge">

<div id="pledge-money">
<input type="radio"  />
<h3>Mahogany Special Edition</h3>
<h4>Pledge $200 or more</h4>

</div>
<p><b>0</b> <span>left</span> </p>

<p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. 
  You'll be added to our Backer member list. Shipping is included.
 </p>





</div>

 

</div>



</div>

</aside>




   


<aside className='Thank-you' style={{display:  givepledge ? 'block' : 'none' } } >

<div className="tick" align='center'>
  <img src={check} alt="Thank-you" />
</div>
    
    <div className="thank-you-words">
    <h3 align='center'>Thanks for your support!</h3>
<p align='center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. 
  You will get an email once our campaign is completed.</p>
    </div>
  
<div className="btn" align='center'>
<button onClick={thankyouHandler} >Got it!</button>
</div>
 

</aside>

    </div>
  )
}

export default Fund
