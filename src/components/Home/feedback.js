import React from 'react'

function feedback(props) {
  
  return (
    <div className=''>
      <div className="container flex abcd3 items-center">
  <img className=' h-fit' src={props.profile} alt="example" />

  <div className=' inline-block'>
  <h2>{props.name}</h2>
  <p>{props.content}</p>
  </div>
  
</div>

      {/* <div className="flex justify-center">
        <div class="flex items-center w-[100px] file:">
          <img
            src={props.profile}
            className="rounded-2xl w-[100px] h-[100px]"
            alt=""
          />
        </div>
        <div className="flex py-25">
          <div className="py-3 w-[80%]">
            <div>
            <h1 className=" flex text-3xl text-black font-bold">{props.name}
            </h1>
            </div>
            <div>
              {props.content}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default feedback;