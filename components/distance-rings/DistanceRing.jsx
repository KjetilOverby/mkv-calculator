import React from 'react'


const DistanceRing = (props) => {
 
  
  
    return (
        <div className={`start-ring-container ${props.deleteTransition}`}>
             <div className={`${props.ringStyle} ${props.deleteRing} ${props.startRingDelete} ${props.endRingDelete} ${props.startRingValue} `}>
             {props.ringValue} 

       {props.startInputWindow && <i onClick={props.singleRingDelete} className='delete-button-ring fas fa-trash-alt'></i>}


       {props.rawInputWindow && <i onClick={props.singleRingDelete} className='delete-button-ring fas fa-trash-alt'></i>}

      {props.endInputWindow && <i onClick={props.singleRingDelete} className='delete-button-ring fas fa-trash-alt'></i>}


        </div>
        <style jsx>{`

     .start-ring-container {
       display: inline-block;
      
      
       max-width: 500px;
      transition: max-width 0.6s;
     }
        
   .distance-ring {
    
    height: 11rem;
    width: 3.2rem;
    margin: 1.1em .4rem 0 0;
    display: flex;
    justify-content: center;
    padding: .5rem .7rem;
    font-size: 1.6rem;
    font-weight: bold;
    border: 1px solid gray;
    border-radius: 5px;
    position: relative;
    align-items: center;
    color: white;
    animation: bounceInDown 1.5s;
    box-shadow: 10px 10px 20px black;
    z-index: 12
   
    
}


@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}


@keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }
  
    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
  
    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
  }
/* @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
  
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
  
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
  
    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  } */
  
.inner-distance-ring {
    background: var(--inner-ring);
    
}
.outer-distance-ring {
    background: var(--outer-ring);
    
}
.delete-button-ring {
    height: 1rem;
    width: 2.5rem;
    position: absolute;
    bottom: 6rem;
    outline: none;
    border: none;
    color: var(--main-light);
    top: 9rem;
    left: 40%;
    transition: .5s;
 
}
.delete-button-ring:hover {
   
    color:var(--main-dark);
}

.outer-startring {
     animation: bounceInLeft 1.5s;
    
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
.outer-endRing {
  animation: bounceInRight 1.5s
}
@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.ring-delete {
  animation: bounceOutDown 1s
}
.start-delete {
  animation: bounceOutDown 1s
}
.end-delete {
  animation: bounceOutDown 1s
}
.delete-transition {
      
     max-width: 0px

    } 
        `}</style>
        </div>
    )
}

export default DistanceRing



// COPY
// import React from 'react'


// const DistanceRing = (props) => {
 
  
  
//     return (
//         <div className={`start-ring-container ${props.deleteTransition}`}>
//              <div className={`${props.ringStyle} ${props.deleteRing} ${props.startRingDelete} ${props.endRingDelete} ${props.startRingValue} `}>
//              {props.ringValue} 

//        {props.startInputWindow && <i onClick={props.singleRingDelete} className='delete-button-ring fas fa-trash-alt'></i>}


//       {/*  {props.rawInputWindow && <i onClick={props.singleRingDelete} className='delete-button-ring fas fa-trash-alt'></i>} */}

//       {props.endInputWindow && <i onClick={props.singleRingDelete} className='delete-button-ring fas fa-trash-alt'></i>}


//         </div>
//         <style jsx>{`

//      .start-ring-container {
//        display: inline-block;
      
      
//        max-width: 500px;
//       transition: max-width 0.6s;
//      }
        
//    .distance-ring {
    
//     height: 9rem;
//     width: 3rem;
//     margin: 0 .3rem;
//     display: flex;
//     justify-content: center;
//     padding: .5rem .7rem;
//     font-size: 1.3rem;
//     font-weight: 600;
//     border: 1px solid gray;
//     border-radius: 5px;
//     position: relative;
//     align-items: center;
//     color: white;
//     animation: bounceInDown 1.5s;
//     box-shadow: 10px 10px 20px black;
   
    
// }


// @keyframes bounceOutDown {
//   20% {
//     -webkit-transform: translate3d(0, 10px, 0);
//     transform: translate3d(0, 10px, 0);
//   }

//   40%,
//   45% {
//     opacity: 1;
//     -webkit-transform: translate3d(0, -20px, 0);
//     transform: translate3d(0, -20px, 0);
//   }

//   to {
//     opacity: 0;
//     -webkit-transform: translate3d(0, 2000px, 0);
//     transform: translate3d(0, 2000px, 0);
//   }
// }


// @keyframes bounceInDown {
//     from,
//     60%,
//     75%,
//     90%,
//     to {
//       -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//       animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     }
  
//     0% {
//       opacity: 0;
//       -webkit-transform: translate3d(0, -3000px, 0);
//       transform: translate3d(0, -3000px, 0);
//     }
  
//     60% {
//       opacity: 1;
//       -webkit-transform: translate3d(0, 25px, 0);
//       transform: translate3d(0, 25px, 0);
//     }
  
//     75% {
//       -webkit-transform: translate3d(0, -10px, 0);
//       transform: translate3d(0, -10px, 0);
//     }
  
//     90% {
//       -webkit-transform: translate3d(0, 5px, 0);
//       transform: translate3d(0, 5px, 0);
//     }
  
//     to {
//       -webkit-transform: translate3d(0, 0, 0);
//       transform: translate3d(0, 0, 0);
//     }
//   }
  
//   .bounceInDown {
//     -webkit-animation-name: bounceInDown;
//     animation-name: bounceInDown;
//   }
// /* @keyframes bounceIn {
//     from,
//     20%,
//     40%,
//     60%,
//     80%,
//     to {
//       -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//       animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     }
  
//     0% {
//       opacity: 0;
//       -webkit-transform: scale3d(0.3, 0.3, 0.3);
//       transform: scale3d(0.3, 0.3, 0.3);
//     }
  
//     20% {
//       -webkit-transform: scale3d(1.1, 1.1, 1.1);
//       transform: scale3d(1.1, 1.1, 1.1);
//     }
  
//     40% {
//       -webkit-transform: scale3d(0.9, 0.9, 0.9);
//       transform: scale3d(0.9, 0.9, 0.9);
//     }
  
//     60% {
//       opacity: 1;
//       -webkit-transform: scale3d(1.03, 1.03, 1.03);
//       transform: scale3d(1.03, 1.03, 1.03);
//     }
  
//     80% {
//       -webkit-transform: scale3d(0.97, 0.97, 0.97);
//       transform: scale3d(0.97, 0.97, 0.97);
//     }
  
//     to {
//       opacity: 1;
//       -webkit-transform: scale3d(1, 1, 1);
//       transform: scale3d(1, 1, 1);
//     }
//   } */
  
// .inner-distance-ring {
//     background: var(--inner-ring);
    
// }
// .outer-distance-ring {
//     background: var(--outer-ring);
    
// }
// .delete-button-ring {
//     height: 1rem;
//     width: 2.5rem;
//     position: absolute;
//     bottom: 6rem;
//     outline: none;
//     border: none;
//     color: var(--main-light);
//     top: 7rem;
//     left: 40%;
//     transition: .5s;
 
// }
// .delete-button-ring:hover {
   
//     color:var(--main-dark);
// }

// .outer-startring {
//      animation: bounceInLeft 1.5s;
    
// }

// @keyframes bounceInLeft {
//   from,
//   60%,
//   75%,
//   90%,
//   to {
//     -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//   }

//   0% {
//     opacity: 0;
//     -webkit-transform: translate3d(-3000px, 0, 0);
//     transform: translate3d(-3000px, 0, 0);
//   }

//   60% {
//     opacity: 1;
//     -webkit-transform: translate3d(25px, 0, 0);
//     transform: translate3d(25px, 0, 0);
//   }

//   75% {
//     -webkit-transform: translate3d(-10px, 0, 0);
//     transform: translate3d(-10px, 0, 0);
//   }

//   90% {
//     -webkit-transform: translate3d(5px, 0, 0);
//     transform: translate3d(5px, 0, 0);
//   }

//   to {
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }

// .bounceInLeft {
//   -webkit-animation-name: bounceInLeft;
//   animation-name: bounceInLeft;
// }
// .outer-endRing {
//   animation: bounceInRight 1.5s
// }
// @keyframes bounceInRight {
//   from,
//   60%,
//   75%,
//   90%,
//   to {
//     -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//   }

//   from {
//     opacity: 0;
//     -webkit-transform: translate3d(3000px, 0, 0);
//     transform: translate3d(3000px, 0, 0);
//   }

//   60% {
//     opacity: 1;
//     -webkit-transform: translate3d(-25px, 0, 0);
//     transform: translate3d(-25px, 0, 0);
//   }

//   75% {
//     -webkit-transform: translate3d(10px, 0, 0);
//     transform: translate3d(10px, 0, 0);
//   }

//   90% {
//     -webkit-transform: translate3d(-5px, 0, 0);
//     transform: translate3d(-5px, 0, 0);
//   }

//   to {
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }
// .ring-delete {
//   animation: bounceOutDown 1s
// }
// .start-delete {
//   animation: bounceOutDown 1s
// }
// .end-delete {
//   animation: bounceOutDown 1s
// }
// .delete-transition {
      
//      max-width: 0px

//     } 
//         `}</style>
//         </div>
//     )
// }

// export default DistanceRing
