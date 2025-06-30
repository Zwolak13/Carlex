import React from 'react';

export default function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      id="logo"
      {...props}
      className={`flex justify-center items-center flex-col ${props.className ?? ''}`}
    >
      <h1 className="font-mono text-5xl font-normal text-blue-400 tracking-wide">
        <span className="text-orange-500">&lt;</span>
        carlex
        <span className="text-orange-500">/&gt;</span>
      </h1>
      <p className="font-mono text-xl text-gray-500 mt-2">// A Flexbox Game </p>
      <p className="font-mono text-xl text-gray-500 mt-2 text-center">// Inspired by <a href="https://flexboxfroggy.com" target='_blank' className="hover:text-yellow-400">Flexbox Froggy</a> 🐸 </p>
    </div>
  );
}
