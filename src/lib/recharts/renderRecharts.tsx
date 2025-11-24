import React from 'react';
import ReactDOM from 'react-dom/client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

type Entry = { type:'income'|'expense'; amount:number; date:string; };

export function renderRecharts(el: HTMLElement, entries: Entry[]) {
  const dataMap: Record<string, number> = {};
  entries.filter(e=>e.type==='expense').forEach(e=>{
    const m = e.date.slice(0,7);
    dataMap[m] = (dataMap[m]||0)+e.amount;
  });
  const data = Object.entries(dataMap).map(([month, total])=>({ month, total }));
  const root = ReactDOM.createRoot(el);
  root.render(
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="month" /><YAxis /><Tooltip /><Legend />
      <Bar dataKey="total" fill="#8884d8" />
    </BarChart>
  );
}
