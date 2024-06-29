import React from 'react'
import { angleToRadians } from '../utils/angle'
import * as THREE from "three"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

function MyThree() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} />
            <OrbitControls />


            {/* ball , the more the sigment , the more round it will look  */}
            {/* mesh, is for view */}
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>

            {/* plane, mesh create view or objects */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial color={"#1ea3d8"} />
            </mesh>

            <ambientLight args={["#ffffff", 1]} />
        </>
    )
}

export default MyThree