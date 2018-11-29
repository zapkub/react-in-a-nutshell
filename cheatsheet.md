# Table Of Content

- [ประกาศ Function Component](#ประกาศ-function-component)
- [Passing Props Component](#passing-props-component)
- [Lists Component](#lists-component)
- [Conditional JSX](#conditional-JSX)
- [Form Handler](#form-handler)
  - [Form Input](#form-input)
  - [Select and options](#select-and-options)
  - [Button](#button)
- [Children property](#children)
- [Fragment Component](#fragment-component)
- [Basic Styling](#basic-styling)
- [Inner HTML](#inner-html)
- [Element Focus and Blur](#element-focus--blur)
- [Default Props](#default-props)
- [Javascript in JSX](#javascript-in-jsx)

## ประกาศ Function Component

การประกาศ Component ใน react

[Live Demo](https://codesandbox.io/s/mq61nryp69)

```jsx
function App() {
  return <div className="App" />;
}
```

## Passing Props Component

การส่งตัวแปรออกมาจาก component

[Live Demo](https://codesandbox.io/s/yvv15z7rp9)

```jsx
function App(props) {
  return <button onClick={props.clickHello}>{"Click Hello"}</button>;
}

<App
  clickHello={() => {
    alert("Hello!!!");
  }}
/>;
```

การส่งค่าเข้าไปใน Component และรับค่าจากข้างนอก
[Live Demo](https://codesandbox.io/s/5x7r527lp4)

```jsx
function App(props) {
  return <div>{props.msg}</div>;
}
<App msg={"Hello!!!"} />;
```

## Lists Component

สร้าง Component จาก Array loop

[Live Demo](https://codesandbox.io/s/345m38z716)

```jsx
function BNK() {
  return (
    <div>
      {["Noey 💚", "Jane", "Mewnich", "Cherprang"].map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
<BNK />;
```

## Conditional JSX

การเพิ่มเงื่อนไขให้ React ด้วย JSX
[Live Demo](https://codesandbox.io/s/24qz842x6y)

```jsx
function Template(props) {
  return <div>{props.isShow ? <div>{"React in my life!!!"}</div> : null}</div>;
}
<Template isShow={true} />;
```

## Form Handler

### Form Input

[Live Demo](https://codesandbox.io/s/o1vr1k6v05)

```jsx
function InputForm(props) {
  const [value, setValue] = useState("Hello!!!");
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState("1");
  return (
    <div>
      <input
        type={"text"}
        value={value}
        onKeyPress={e => {
          setValue(console.log(e));
        }}
      />
      <br />
      <br />

      <input
        type={"checkbox"}
        onClick={() => {
          setCheck(!check);
        }}
      />
      <label>{check + ""}</label>
      <br />
      <br />

      <label>{`Now radio: ${radio}`}</label>
      <br />
      <input
        type={"radio"}
        checked={radio === "1"}
        onChange={e => {
          setRadio(e.target.value);
        }}
        value={1}
      />
      <label>{1}</label>
      <br />
      <input
        type={"radio"}
        checked={radio === "2"}
        onChange={e => {
          setRadio(e.target.value);
        }}
        value={2}
      />
      <label>{2}</label>
      <br />
      <input
        type={"radio"}
        checked={radio === "3"}
        onChange={e => {
          setRadio(e.target.value);
        }}
        value={3}
      />
      <label>{3}</label>
    </div>
  );
}
<InputForm />;
```

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
  const [value, setValue] = React.useState(0);
  return [
    value,
    () => {
      setValue(value + 1);
    }
  ];
}

function App() {
  const [onClickValue, onClickIncrement] = useCountState();
  const [onEnterValue, onEnterIncrement] = useCountState();
  return (
    <div className="App">
      <h1>
        {onClickValue}
        <sup dangerouslySetInnerHTML={{ __html: "click" }} />
      </h1>
      <h1>
        {onEnterValue}
        <sup dangerouslySetInnerHTML={{ __html: "enter" }} />
      </h1>
      <button onMouseEnter={onEnterIncrement} onClick={onClickIncrement}>
        {"Increment !"}
      </button>
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

## Javascript in JSX

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

##
