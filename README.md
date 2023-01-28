# mmi-simple-modal

## Install

```bash
npm install --save mmi-simple-modal
```

## Usage

```jsx
import React, { useState } from "react";

import { Modal } from "mmi-simple-modal";

function Example() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Modal</button>
      <Modal
        showModal={openModal}
        setShowModal={setOpenModal}
        title="Example modal."
        body="This is a code example for mmi-simple-modal"
        cancel={true}
        cancelAction={() => setOpenModal(false)}
        callToAction={true}
        callToActionText="Save"
        callToActionAction={() => {
          alert("confirmation action");
          setOpenModal(false);
        }}
        autoClose
        autoCloseDelay="2000"
      />
    </>
  );
}
```

## Props

| Name               | Type     | Description                                     |
| ------------------ | -------- | ----------------------------------------------- |
| showModal          | boolean  | Modal open state                                |
| setShowModal       | function | Modal open state setter                         |
| title              | string   | Modal title                                     |
| body               | string   | Modal content                                   |
| cancel             | boolean  | Show cancel button if true                      |
| cancelAction       | function | Cancel function                                 |
| callToAction       | boolean  | Show the call to action button if true          |
| callToActionText   | string   | Call to action button text (Confirm by default) |
| callToActionAction | function | Call to action function                         |
| autoClose          | boolean  | Auto close modal                                |
| autoCloseDelay     | integer  | Auto close delay in ms (10000ms by default)     |

## Example

[codesandbox](https://codesandbox.io/s/mmi-simple-modal-7jix85)

## License

MIT © [mmi-dev](https://github.com/mmi-dev)
