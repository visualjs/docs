import React from 'react';

function Codesandbox({ children, id, title }) {
  return (
    <div style={{border: '1px solid #282d3e', borderRadius: '4px', backgroundColor: '#282d3e'}}>
      <iframe src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&view=preview`}
        style={{
          width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden'
        }}
        title={title}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}

export default Codesandbox;
