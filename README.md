# Queue-Mate Health 🏥

A student DSA project that demonstrates a **Queue data structure** through a hospital patient queue management system.

## 🎯 Project Goal

The application simulates how patients wait for their turn to see a doctor.

The core rule is **FIFO — First In, First Out**: the first patient to enter the queue is the first patient to be served.

## ✨ Features

- Patient registration with multiple patient records
- FIFO queue visualization with Front and Rear positions
- Enqueue, Dequeue, Peek, IsEmpty and Size operations
- Serve-next-patient workflow
- Served-patient history
- Automatic queue-position updates
- Patient search without changing queue order
- Input validation and duplicate-ID prevention
- Persistent application state using localStorage
- Queue and patient statistics
- Clear queue / clear all data controls
- Simple, responsive UI
- C++ queue implementation for DSA demonstration

## 🧠 Queue Operations

| Operation | Meaning | Complexity |
|---|---|---|
| Enqueue | Add a patient at the rear | O(1) |
| Dequeue | Remove the patient from the front | O(1) |
| Peek | View the front patient | O(1) |
| IsEmpty | Check whether the queue is empty | O(1) |
| Size | Get the number of waiting patients | O(1) |

## 🔄 Example

FRONT → P001 → P002 → P003 → P004 ← REAR

After serving P001:

FRONT → P002 → P003 → P004 ← REAR

## 💻 C++ DSA Implementation

The repository includes a C++ implementation of the patient queue so the underlying DSA can be studied and explained separately from the frontend.

The main operations are Enqueue, Dequeue, Peek, Size and IsEmpty.

## 🛠️ Tech Stack

- C++
- React
- TypeScript
- Tailwind CSS
- Vite
- Local Storage

## 🌐 Live Demo

[Open Queue-Mate Health](https://queue-mate-health.lovable.app)

## 🚀 Run Locally

`git clone https://github.com/roshansrirayalu/queue-mate-health.git`

`cd queue-mate-health`

`npm install`

`npm run dev`

## 📚 What This Project Demonstrates

- Queue data structure and FIFO processing
- Basic algorithmic thinking
- State management and data persistence
- Responsive frontend development
- Applying a DSA concept to a practical application

## 👨‍💻 Author

**Roshan Sri Rayalu Yeddula**

[GitHub](https://github.com/roshansrirayalu)