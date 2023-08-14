import React from 'react'
import { TailSpin } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className="h-screen w-screen bg-black"></div>
        // <div className="spinner m-auto">
        //     <TailSpin
        //         width="50"
        //         height="50"
        //         color="currentColor"
        //         ariaLabel="tail-spin-loading"
        //         radius="1"
        //         wrapperStyle={{}}
        //         visible={true} />
        // </div>
    )
}
