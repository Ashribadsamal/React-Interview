import React from 'react'
import './App.css';
import ConditionalRendering from './component/conditonalrendering';
import ContextApp from './component/context/context hook/ContextApp';
import ContextA from './component/context/ContextA';
import ClickCounter from './component/HigherOrder/ClickCounter';
import HoverCounter from './component/HigherOrder/HoverCounter';
import ListRendering from './component/ListRendering';
import CounterMemo from './component/memo in functional/CounterMemo';
import ParentComp from './component/Purecomponent/ParentComp';
import RefsDemo from './component/Ref In Class/RefsDemo';
import RefsComp from './component/Ref In functional/RefsComp';
import Counter from './component/RenderProps/Counter';
import RenderComp from './component/RenderProps/RenderComp';

function App() {
  return (
    <div className="App">
      <h2>Conditonal Rendering</h2>
    <ConditionalRendering/>
    <hr/>
    <h2>List Rendering</h2>
   
    <ListRendering/>
    <hr/>
    <h2>Context Api</h2>
    
    <ContextA/>
    <hr/>
    <h2>PureComponent</h2>
    
    <ParentComp/>
    <hr/>
    <h2>Refs in Class Component</h2>
    
    <RefsDemo/>
    <hr/>
    <h2>Higher Order Component</h2>
    
    <ClickCounter/>
    <HoverCounter/>
    <hr/>
    <h2>Render Props</h2>
    
    <RenderComp/>
    <hr/>
    <h2>useRef hook</h2>
    
    <RefsComp/>
    <hr/>
    <h2>useMemo hook</h2>
    
    <CounterMemo/>
    <hr/>
    <h2>useContext hook</h2>
    
    <ContextApp/>
    </div>
  );
}

export default App;
