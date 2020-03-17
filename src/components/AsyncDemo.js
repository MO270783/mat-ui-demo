import React from 'react';

export function AsyncDemoComponent() {
  const [showDemo, setShowDemo] = React.useState(false);

  const onClick = () => setShowDemo(!showDemo);

  return (
    <div>
      <button onClick={onClick} type="button">
        {showDemo ? 'Hide' : 'Show'}
      </button>
      {showDemo && <Demo />}
    </div>
  );
}

function Demo() {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:8080/async', { signal: abortController.signal })
      .then(res => res.text())
      .then(val => {
        if (!abortController.signal.aborted) {
          setValue(val);
        }
      })
      .catch(error => {
        console.log(error);
      });

    return () => abortController.abort();
  }, []);

  return <p>This is a test component {value} </p>;
}
