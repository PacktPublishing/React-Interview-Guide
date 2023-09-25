'use client';

import { useState } from 'react';

export default function Home() {
  const [h1color, setH1Color] = useState('blue');

  return (
    <div>
      <h1 style={{ color: h1color }}>Hello World</h1>
    </div>
  );
}
