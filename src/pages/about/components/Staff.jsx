import React from 'react';

const Staff = ({image, name, position}) => {
  return (
    <>
        <img src={image} alt="" />
        <strong>{name}</strong>
        <p>({position})</p>
    </>
  )
}

export default Staff