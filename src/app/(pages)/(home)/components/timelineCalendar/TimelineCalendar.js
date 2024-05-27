import React from 'react';

const events = [
  { date: '2024-05-24', title: 'Design System', description: 'Description for event Design System' },
  { date: '2024-06-10', title: 'Landing Page Variation', description: 'Description for event Landing Page Variation ' },
  { date: '2024-07-21', title: 'Dashboard Design', description: 'Description for event Dashboard Design' },
  { date: '2024-07-14', title: 'Web Development', description: 'Description for event Web Development' },
];

const TimelineCalendar = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-xl font-bold mb-8">Timeline</h2>
      <div className="relative border-l border-gray-200">
        {events.map((event, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute -left-3.5 mt-1.5 h-7 w-7 rounded-full bg-blue-500 border-2 border-white"></div>
            <div className="ml-8">
              <time className="block mb-2 text-sm font-semibold text-gray-600">{event.date}</time>
              <h3 className="text-sm mfont-semibold text-black font-semibold">{event.title}</h3>
              <p className="text-gray-700 text-xs">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCalendar;
