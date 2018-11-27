

### Select and Options
การใช้ `<select>`, `<options>` เพื่อทำ Dropdown list

**[Live Demo](https://codesandbox.io/s/rj0v506pyn)**

```jsx
const MeatOptions = ["Chicken", "Beef", "Pork"];
const BreadOptions = ["Galic", "Pamesan", "Italian"];

function App() {
  const [meatValue, setMeatValue] = React.useState(MeatOptions[0]);
  const [breadValue, setBreadValue] = React.useState(BreadOptions[0]);
  return (
    <div className="App">
      <select value={meatValue} onChange={e => setMeatValue(e.target.value)}>
        {MeatOptions.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
      <select value={breadValue} onChange={e => setBreadValue(e.target.value)}>
        {BreadOptions.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
      <h4>{"Delicious sandwich"}</h4>
      <code
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            { meat: meatValue, bread: breadValue },
            null,
            " "
          )
        }}
      />
    </div>
  );
}
```

### Button
การ Handle HTMLButton event

**[Live Demo](https://codesandbox.io/s/wkv2n1r6lk)**

```jsx
function useCountState() {
  const [value, setValue] = React.useState(0)
  return [
    value,
    () => {
      setValue(value + 1)
    }
  ]
}

function App() {
  const [onClickValue, onClickIncrement] = useCountState()
  const [onEnterValue, onEnterIncrement] = useCountState()
  return (
    <div className="App">
      <h1>{onClickValue}<sup dangerouslySetInnerHTML={{ __html: "click" }} /></h1>
      <h1>{onEnterValue}<sup dangerouslySetInnerHTML={{ __html: "enter" }} /></h1>
      <button
        onMouseEnter={onEnterIncrement}
        onClick={onClickIncrement}>{"Increment !"}</button>
    </div>
  );
}
```



## Children

การใช้ Children Property เพื่อ Render Component ที่อยู่ภายใต้ Component

**[Live Demo](https://codesandbox.io/s/1o4jzj57v4)**

```jsx
const Silentman = () => <div />;
const Echoman = ({ children }) => {
  return <div>{children}</div>;
};

const Dialog = ({ msg }) => {
  return <div>{msg}</div>;
};
function App() {
  return (
    <>
      <Echoman>
        <Dialog msg="I am blind not deaf" />
      </Echoman>
      <Silentman>
        <Dialog msg="Silent but deadly" />
      </Silentman>
    </>
  );
}
```

## Fragment component

การใช้ Fragment เพื่อ Render หลายๆ Component โดยไม่ต้องมี Parent

**[Live Demo](https://codesandbox.io/s/zl4o2r6o23)**

```jsx
const Echoman = () => (
  <>
    <span>{"Boogie man!"}</span>
    <br />
  </>
);
function App() {
  return (
    <>
      <Echoman />
      <Echoman />
      <Echoman />
      <Echoman />
    </>
  );
}
```

## Basic Styling

การจัดการ style attribute เบื้องต้นด้วย Class และ Inline style

**[Live Demo](https://codesandbox.io/s/5k999x1mr4)**

```css
// styles.css
.text-box {
  color: tomato;
}
```

```jsx
function App() {
  return (
    <div className="App">
      <span className="text-box">{"Hello Tomato!"}</span>
    </div>
  );
}
```

## Inner html

การใส่ค่า HTML string ลงไปใน React component ตรงๆ

**[Live Demo](https://codesandbox.io/s/nwqlykv0xl)**

```jsx
const HTML = `
  <div style="color: red">
    Hello HTML!
  </div>
`;

function App() {
  return <div className="App" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
```

## Element, Focus / Blur

การสั่ง Focus input element

**[Live Demo](https://codesandbox.io/s/n15or2wlkl)**

```jsx
function App(props) {
  const inputRef = React.createRef();
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}
```

## Default Props

การกำหนดค่า Default ให้กับ Component Properties

**[Live Demo](https://codesandbox.io/s/9z33pyx6ry)**

```jsx
const Echo = props => {
  return <div>{props.msg}</div>;
};
Echo.defaultProps = {
  msg: "Hello World!"
};

function App(props) {
  return (
    <div>
      <Echo />
      <Echo msg="Hello Mars!" />
    </div>
  );
}
```

## JSX Javascript embeded

การเรียกคำสั่ง Javascript ภายใน JSX tag

**[Live Demo](https://codesandbox.io/s/52ry62kzpk)**

```jsx
function SayHi() {
  return "Hi world";
}

function App() {
  return <div>{SayHi()}</div>;
}
```
