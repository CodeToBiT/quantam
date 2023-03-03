import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiRightArrowAlt } from "react-icons/bi";

const CountryCard = (props) => {
  return (
    <>
      <div className="card-country">
        <div className="position-relative">
            <div className="media-wrapper position-relative">
                <Image src={props.image} fill alt="Australia"/>
            </div>
            <div className="flag position-relative">
                <Image src={props.flag_image} fill />
            </div>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
            <div className="d-flex gap-2 align-items-center justify-content-center">
                <Link href={`/countries/${props.slug}`} className="stretched-link" > Read more</Link>
                <BiRightArrowAlt/>
            </div>
        </div>
      </div>
    </>
  )
}

export default CountryCard
