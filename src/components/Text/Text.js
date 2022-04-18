import React, { useState } from "react";
import ReactDOM from "react-dom";
import { extend, Canvas } from "react-three-fiber";
import DatGui, { DatColor, DatNumber, DatSelect } from "react-dat-gui";
import { Text } from "troika-three-text";
import fonts from "./fonts";

import "react-dat-gui/build/react-dat-gui.css";
import "./styles.css";

/* ======================

This demo shows text rendering performed by the troika-three-text library. 
In this case we use Text directly within a `react-three-fiber` scene.

Also see the "drei" addon library for react-three-fiber, which formalizes
this integration: https://github.com/react-spring/drei#%EF%B8%8F-text-

*/

// Register Text as a react-three-fiber element
extend({ Text });

export default function Textt() {
    // State:
    const [opts, setOpts] = useState({
        font: "Philosopher",
        fontSize: 12,
        color: "#99ccff",
        maxWidth: 300,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial"
    });

    // Handlers:
    const onMouseMove = e => {
        setRotation([
            ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
            ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
            0
        ]);
    };

    return (
        <div>
            <Canvas
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "10%"
                }}
                pixelRatio={window.devicePixelRatio}
                onMouseMove={onMouseMove}
            >
                <text
                    position-z={-180}
                    rotation={rotation}
                    {...opts}
                    text={text}
                    font={fonts[opts.font]}
                    anchorX="center"
                    anchorY="middle"
                >
                    {opts.materialType === "MeshPhongMaterial" ? (
                        <meshPhongMaterial attach="material" color={opts.color} />
                    ) : null}
                </text>

                <pointLight position={[-100, 0, -160]} />
                <pointLight position={[0, 0, -170]} />
                <pointLight position={[100, 0, -160]} />
            </Canvas>

            <DatGui data={opts} onUpdate={setOpts}>
                <DatSelect path="font" options={Object.keys(fonts)} />
                <DatNumber path="fontSize" min={1} max={50} step={1} />
                <DatNumber path="maxWidth" min={50} max={500} step={1} />
                <DatNumber path="lineHeight" min={0.5} max={2} step={0.1} />
                <DatNumber path="letterSpacing" min={-0.1} max={0.5} step={0.01} />
                <DatSelect
                    path="textAlign"
                    options={["left", "center", "right", "justify"]}
                />
                <DatSelect
                    path="materialType"
                    label="material"
                    options={["MeshBasicMaterial", "MeshPhongMaterial"]}
                />
                <DatColor path="color" />
            </DatGui>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);