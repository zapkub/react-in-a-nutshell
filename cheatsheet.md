







## JSX Javascript embeded
> การเรียกคำสั่ง Javascript ภายใน JSX tag

[Live Demo](https://codesandbox.io/s/52ry62kzpk)

```jsx
function SayHi() {
  return "Hi world"
}

function App () {
  return (
    <div>
      {SayHi()}
    </div>
  )
}
```