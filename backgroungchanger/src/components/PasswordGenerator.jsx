import { useState } from "react";

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

        let characters = lowercase;
        if (includeUppercase) characters += uppercase;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }

        setPassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    };

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>
            <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center justify-between">
                    <label>Password Length:</label>
                    <input
                        type="number"
                        min="4"
                        max="32"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-16 px-2 py-1 border rounded-lg text-center"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label>Include Uppercase Letters</label>
                    <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label>Include Numbers</label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label>Include Symbols</label>
                    <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                </div>
            </div>
            <button
                onClick={generatePassword}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
            >
                Generate Password
            </button>
            {password && (
                <div className="mt-4 bg-gray-100 p-3 rounded-lg shadow-md">
                    <p className="text-lg font-bold text-center">{password}</p>
                    <button
                        onClick={copyToClipboard}
                        className="w-full mt-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg"
                    >
                        Copy to Clipboard
                    </button>
                </div>
            )}
        </div>
    );
}

export default PasswordGenerator;
