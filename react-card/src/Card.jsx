import React from 'react'

function Card(props) {
  return (
        <div class="columns">
  <ul class="price">

    <p class="top">{props.name}</p>
    <p class="grey">{props.next}</p>

    <div class="status1">
    <p>{props.last1}</p>
    <p>{props.last2}</p>
    <p>{props.last3}</p>
    <p>{props.last4}</p>
    <p>{props.last5}</p>
    <p>{props.last6}</p>
    <p>{props.last7}</p>
    <p>{props.last8}</p>
    </div>
    <div class="status2">
    <p>{props.last11}</p>
    <p>{props.last22}</p>
    <p>{props.last33}</p>
    <p>{props.last44}</p>
    <p>{props.last55}</p>
    <p>{props.last66}</p>
    <p>{props.last77}</p>
    <p>{props.last88}</p>
    </div>
    <div class="status3">
    <p>{props.last111}</p>
    <p>{props.last222}</p>
    <p>{props.last333}</p>
    <p>{props.last444}</p>
    <p>{props.last555}</p>
    <p>{props.last666}</p>
    <p>{props.last777}</p>
    <p>{props.last888}</p>
    </div>

    <li class="grey"><a href="#" class="button"> Button </a></li>
  </ul>
</div>
  )
}

export default Card