import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import config from "ckeditor5-custom-build/src/config";
import "./App.css";
import { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "900px",
            color: "black",

            padding: "50px",
            backgroundColor: "white",
          }}
        >
          <CKEditor
            editor={Editor}
            config={config}
            data={first}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
