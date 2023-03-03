import React from "react";
export default function Helloworld() {
  const [_store, store] = useStore("helloworld");
  useEffect(() => {
    store.text = "Hello World! This is 7INXIAL!";
  }, []);
  return <div>{_store.text}</div>;
}
