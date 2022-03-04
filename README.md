# react-modal-hooks-styled-components
A simple Modal that can be closed by clicking outside and esc button as well as the cross button inside the modal. This component is made by using styled component and react hooks.

[Basic Demo](https://codesandbox.io/s/simple-skeleton-modal-ly96ts)
[Modified Demo](https://codesandbox.io/s/modified-modal-ktl6kw?file=/src/App.js)

[NPM Link](https://www.npmjs.com/package/react-modal-hooks-styled-component)

Props Name  | Description
------------- | -------------
customBackgroundStyle  | object that contains styled property for the overlay background of the modal
customWrapperStyle  | object that contains styled property for the wrapper component of the modal
closeModalButtonStyle  | object that contains styled property for the close icon of the modal
showModal (required) | boolean value to show modal or not
setShowModal (required) | function to toggle the value of show modal
modalCloseButton | boolean to decide if the cross icon of the modal should be showed or not

### Bacic Code

```javascript
import React, { useState } from "react";
import Modal from "react-modal-hooks-styled-component";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowModal(!showModal)}>Click Me</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h1>Modal</h1>
      </Modal>
    </div>
  );
}
```
