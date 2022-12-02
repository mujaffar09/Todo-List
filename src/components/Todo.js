import { useState } from "react";

export default function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const resetInput = () => {
    setInput("");
  };

  const handleDelete = (itemIndex) => {
    console.log("HANDLE DELETE WAS CLICKED BY INDEX = ", itemIndex);

    let updatedList = list.filter((item, index) => index !== itemIndex);
    setList(updatedList);
  };

  const addTask = () => {
    console.log("Add Task was clicked");
    let updatedList = [...list, input];
    console.log(updatedList);
    setList(updatedList);
    resetInput();
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    setInput(value);
  };

  return (
    <div>
      <input
        onChange={handleInputChange}
        placeholder="Try adding your routine"
        value={input}
      />
      <input onClick={addTask} value="Add" type="button" />

      <ol>
        {list.map((item, index) => (
          <li>
            {item}
            <input
              onClick={() => handleDelete(index)}
              type="button"
              value="Delete"
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
