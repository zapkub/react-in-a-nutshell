



## Default Props

การกำหนดค่า Default ให้กับ Component Properties

[Live Demo](https://codesandbox.io/s/9z33pyx6ry)

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

[Live Demo](https://codesandbox.io/s/52ry62kzpk)

```jsx
function SayHi() {
  return "Hi world";
}

function App() {
  return <div>{SayHi()}</div>;
}
```
