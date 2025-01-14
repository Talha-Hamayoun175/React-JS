import { useState } from "react";
import PasswordGenerator from './PasswordGenerator.jsx'


function ColorPickerApp() {
    const [color, setColor] = useState("white");
    const [customColors, setCustomColors] = useState([]);
    const [newColor, setNewColor] = useState("");

    const addColor = () => {
        if (newColor && !customColors.includes(newColor)) {
            setCustomColors([...customColors, newColor]);
            setNewColor("");
        }
    };

    return (
        <>
            <div
                className="container-fluid w-full h-screen"
                style={{ backgroundColor: color }}
            >
                <div className="bottom-12 inset-x-0 px-2 flex flex-col items-center gap-4">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-zinc-200 px-3 py-2 rounded-xl mt-3">
                        {["red", "green", "blue", "yellow", "pink", "cyan"].map((c) => (
                            <button
                                key={c}
                                onClick={() => setColor(c)}
                                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                                style={{ backgroundColor: c }}
                            >
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                            </button>
                        ))}
                        {customColors.map((c) => (
                            <button
                                key={c}
                                onClick={() => setColor(c)}
                                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                                style={{ backgroundColor: c }}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2 items-center">
                        <input
                            type="text"
                            value={newColor}
                            onChange={(e) => setNewColor(e.target.value)}
                            placeholder="Enter a color"
                            className="px-3 py-1 rounded-lg border shadow-md"
                        />
                        <button
                            onClick={addColor}
                            className="px-4 py-1 bg-blue-500 text-white rounded-lg shadow-lg"
                        >
                            Add Color
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mt-5">
                        < PasswordGenerator />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ColorPickerApp;
