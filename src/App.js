import React from 'react';

// ファンクショナルコンポーネント(関数)
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Masa" },
    {}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi,I am {props.name}, and {props.age} years old!</div>
}

// propsのデフォルト設定
User.defaultProps = {
  name: "NoName", age: 1
}

export default App;
