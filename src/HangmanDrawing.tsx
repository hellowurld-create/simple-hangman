import React from 'react'

const Head = (
    < div style={{ 
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid white",
        position: "absolute",
        top: "50px",
        right:"-30px"
       }}/>
)


export const HangmanDrawing = () => {
  return (
      <div style={{ position: "relative", }}>
          {Head}
          <div style={{height: "50px", width: "10px", background:"white", position: "absolute", top: 0, right:0}}/>
          <div style={{height: "10px", width: "200px", background:"white", marginLeft: "120px"}}/>
          <div style={{height: "400px", width: "10px", background:"white", marginLeft: "120px"}}/>
          <div style={{height:"10px", width: "250px", background:"white"}} />
    </div>
  )
}
