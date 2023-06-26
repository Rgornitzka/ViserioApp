import React from "react"

function WowheadIcon(props) {
  const {name, className} = props
  console.log(props.name);

  return (
    <img
      src={`https://wow.zamimg.com/images/wow/icons/medium/${name}.jpg`}
      style={{ width: "64px" }}
      className={className}
      alt = {name}
    />
    
  )
}

export default WowheadIcon
