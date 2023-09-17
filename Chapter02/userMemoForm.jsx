import { memo, useState } from 'react';

const UserProfile = memo(function UserProfile({ name, age }) {
  return (<>
         	<p>Name:{name}</p>
         	<p>Age: {age}</p>
         </>);
});
export default function UserEnquiryForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  return (
    <>
      <label>
        Name: <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Age: <input value={age} onChange={e => setAge(e.target.value)} />
      </label>
        <label>
        Email: <input value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <hr/>
      <UserProfile name={name} age={age}/>
    </>
  );
}
