import React from "react";

const SuggestionsDropdown = ({ suggestions, onSelect }) => {
    return (
        <ul className="absolute top-full left-0 w-full mt-1 bg-white border rounded-xl shadow z-10 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
                <li
                    key={index}
                    onMouseDown={() => onSelect(suggestion)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                    {suggestion}
                </li>
            ))}
        </ul>
    );
};

export default SuggestionsDropdown;
