import { useState } from 'react';


function App() {
  return (
    <body class = "bg-slate-800">
      <div id = "Introduction" class = "w-full h-screen bg-violet-900 flex items-center justify-center flex-col">
        <div>
          <h1 class = "font-mono text-9xl font-extrabold text-white">Welcome!</h1>
        </div>
        <div>
          <h1 class = "font-mono text-6xl font-extrabold text-white">My name is Rylan and I am a Software Developer.</h1>
        </div>
      </div>
      <div id = "About Me" class = "w-full h-screen">
       <h1>About Me</h1>
      </div>
      <div id = "Projects" class = "w-full h-screen">
       <h1>About Me</h1>
      </div>
      <div id = "Contact Me" class = "w-full h-screen">
       <h1>About Me</h1>
      </div>
    </body>
  );
}

export default App;
