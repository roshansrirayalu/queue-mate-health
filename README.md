# QueueCare Patient Flow

Hospital Patient Queue Management System — Lovable Development Prompt

Build a simple, clean, beginner-friendly web application called “Hospital Patient Queue Management System”.

The main purpose of this project is to demonstrate the use of Data Structures and Algorithms (DSA), specifically a Queue data structure, in a practical hospital scenario.

This is a college/student DSA project, so the implementation should be understandable and demonstrate the DSA concept clearly rather than looking like a complicated commercial hospital management system.

1. Main Concept

The application should simulate how patients wait for their turn to see a doctor.

Patients should enter a queue when they register.

The queue must follow the FIFO principle:

FIFO = First In, First Out

The patient who joins the queue first should normally be served first.

Example:

Patient A → Patient B → Patient C → Patient D

        ↓ Doctor sees patient

Patient A is served first
Patient B is next
Patient C is next
Patient D is next


The application should visually demonstrate this queue behavior.

2. Important DSA Requirement

The project must clearly be based on a Queue data structure implemented using C++.

Use C++ for the DSA/queue logic.

The core queue should support operations such as:

Enqueue — add a patient to the queue

Dequeue — remove/serve the patient at the front

Front/Peek — view the next patient

IsEmpty — check whether the queue is empty

Size — show the number of patients waiting

The queue should follow FIFO behavior.

Important

Do not make the project look like it is only a normal CRUD application.

The Queue DSA should be the central feature of the project.

Clearly show the relationship between the UI and the queue operations.

3. Technology

Use a simple modern web stack for the frontend.

Preferred:

React

TypeScript

Tailwind CSS

Simple component-based architecture

For the DSA portion:

Use C++

Implement the queue logic in C++

Keep the C++ implementation simple and easy for a student to understand.

If a real C++ backend cannot be directly executed by the Lovable frontend environment, structure the project so that:

The C++ queue implementation is clearly included as the DSA implementation/reference.

The frontend simulates the same queue behavior.

Clearly separate the C++ DSA logic from the frontend UI.

Do not replace the C++ DSA requirement with JavaScript-only queue logic without showing the corresponding C++ implementation.

The project should be easy to explain during a college presentation/viva.

4. Application Name

Use the title:

Hospital Patient Queue Management System

Subtitle:

A Queue Data Structure Based Patient Management System

5. UI Design

Keep the UI simple, clean, modern and minimal.

Do NOT create an overly complicated hospital dashboard.

Use:

White/light background

Simple blue medical-themed accent color

Rounded cards

Clean typography

Clear buttons

Simple icons

Good spacing

Responsive layout

The application should work well on:

Desktop

Laptop

Tablet

Mobile

Avoid excessive animations.

Use small, subtle transitions only where useful.

6. Main Dashboard

Create a main dashboard containing the following sections.

Header

At the top:

Hospital Patient Queue Management System

Under it:

Manage patients using the FIFO Queue Data Structure

Add a small status indicator:

System Status: Active

Queue Statistics

Show four simple cards:

Total Waiting

Number of patients currently waiting.

Current Patient

Name/ID of the patient currently being served.

Next Patient

The patient at the front of the waiting queue.

Patients Served

Total number of patients served during the current session.

Example:

┌──────────────┐
│ Total Waiting│
│      5       │
└──────────────┘

┌──────────────┐
│Current Patient│
│    P102      │
└──────────────┘

┌──────────────┐
│ Next Patient │
│    P103      │
└──────────────┘

┌──────────────┐
│Patients Served│
│     12       │
└──────────────┘


7. Add Patient Section

Create a simple form titled:

Register New Patient

Fields:

Patient Name

Patient ID

Age

Gender

Department

Priority/Type

Example departments:

General Medicine

Cardiology

Orthopedics

Pediatrics

Emergency

Have a primary button:

Add to Queue

When the user clicks it:

Validate the form.

Create the patient record.

Add the patient to the queue.

Update the queue visualization.

Update the waiting count.

Show a small success notification:

Patient added to queue successfully.

The newly added patient should appear at the end of the queue.

This demonstrates the Enqueue operation.

8. Queue Visualization

This should be one of the most important parts of the UI.

Create a section titled:

Current Patient Queue

Visually represent the queue from Front → Rear.

Example:

FRONT                                      REAR

┌─────────┐   ┌─────────┐   ┌─────────┐
│ P101    │ → │ P102    │ → │ P103    │
│ Rahul   │   │ Ankit   │   │ Priya   │
└─────────┘   └─────────┘   └─────────┘


Clearly label:

FRONT

and

REAR

The front patient should be visually highlighted because this is the patient who will be served next.

Each patient card should display:

Patient ID

Name

Age

Department

Queue position

Example:

P102
Rahul Kumar

Age: 22
Department: General Medicine

Queue Position: 1


9. Queue Operations

Create a section called:

Queue Operations

Include these buttons:

Add Patient

Represents:

Enqueue

Adds a new patient to the rear.

Serve Next Patient

Represents:

Dequeue

Removes the patient from the front.

After serving a patient, display:

Patient P102 has been served.

Update:

Queue

Current patient

Waiting count

Served count

View Next Patient

Represents:

Peek / Front

Show the patient who will be served next without removing them.

Clear Queue

Remove all waiting patients.

Before clearing, show a confirmation dialog.

10. Empty Queue State

If there are no patients:

Show a clean message:

No patients are currently waiting.

Under it:

Add a patient to start the queue.

Do not show an empty-looking table.

11. Patient History

Create a section called:

Served Patients History

Display patients who have already been served.

Columns:

Patient IDNameDepartmentStatusP101RahulGeneral MedicineServedP102AnkitCardiologyServed

Keep this section simple.

The history should update whenever Serve Next Patient is used.

12. Queue Visualization Animation

When a patient is added:

Show the patient appearing at the rear.

When a patient is served:

Show the patient being removed from the front.

Keep animations subtle and fast.

Do not use flashy animations.

The purpose is to make the FIFO concept easier to understand.

13. DSA Explanation Section

Add a section near the bottom called:

How the Queue Works

Explain the concept in simple language.

Example:

Queue Data Structure

A queue is a linear data structure that follows:

FIFO — First In, First Out

The first patient who enters the queue is the first patient who gets served.

Operations

Enqueue

Adds a new patient to the rear of the queue.

Dequeue

Removes the patient from the front.

Peek

Displays the patient at the front without removing them.

isEmpty

Checks whether the queue contains any patients.

14. C++ Code Section

Add a section called:

C++ Queue Implementation

Display a clean and readable C++ implementation of the patient queue.

Use a simple custom queue implementation rather than making the code unnecessarily complicated.

Example concept:

struct Patient {
    int id;
    string name;
    int age;
    string department;
};

class PatientQueue {
private:
    Patient queue[100];
    int front;
    int rear;

public:
    PatientQueue() {
        front = 0;
        rear = -1;
    }

    void enqueue(Patient patient) {
        queue[++rear] = patient;
    }

    Patient dequeue() {
        return queue[front++];
    }

    Patient peek() {
        return queue[front];
    }

    bool isEmpty() {
        return front > rear;
    }

    int size() {
        return rear - front + 1;
    }
};


Improve the implementation if necessary, but keep it simple enough for a DSA student to understand and explain.

Add comments explaining each important part.

15. DSA Complexity Section

Add a small section:

Time Complexity

OperationComplexityEnqueueO(1)DequeueO(1)PeekO(1)IsEmptyO(1)

Also explain briefly why these operations are efficient.

16. Patient Priority

Include a simple Priority field for demonstration.

Options:

Normal

Emergency

However, keep the main implementation based on a normal FIFO queue.

Do not turn the entire project into a complex priority queue unless specifically needed.

For the basic version, the normal queue should remain the main DSA concept.

Emergency patients can simply be visually marked.

17. Search

Add a simple patient search field.

The user should be able to search by:

Patient ID

Patient Name

The search should only help find/display patient information.

Do not allow searching to break the FIFO ordering of the actual queue.

The queue order must remain unchanged.

18. Notifications

Use simple toast notifications for actions.

Examples:

When adding:

Patient added to queue.

When serving:

Patient P101 served successfully.

When attempting to serve an empty queue:

Queue is empty. No patient to serve.

When clearing:

Queue cleared successfully.

19. Validation

Add basic form validation.

Examples:

Patient name cannot be empty.

Patient ID cannot be empty.

Age must be a valid number.

Department must be selected.

Prevent duplicate Patient IDs.

Show clear error messages.

20. Data Persistence

For the basic project, use localStorage if appropriate so that refreshing the browser does not immediately erase the current queue.

Store:

Waiting patients

Served patients

Served count

Do not introduce a complicated database unless absolutely necessary.

The project should remain simple.

21. Suggested Page Structure

Prefer a single-page application with sections:

Header
   ↓
Dashboard Statistics
   ↓
Register New Patient
   ↓
Current Patient Queue
   ↓
Queue Operations
   ↓
Served Patient History
   ↓
How Queue Works
   ↓
C++ Implementation
   ↓
Time Complexity
   ↓
Footer


22. Footer

Add a simple footer:

Hospital Patient Queue Management System

DSA Project — Queue Implementation using C++

Do not add unnecessary links.

23. Important Functional Rules

The application must follow these rules:

Rule 1

New patients are always added to the rear.

Rule 2

Patients are served from the front.

Rule 3

The first patient added should be the first patient served.

Rule 4

Serving a patient must remove them from the queue.

Rule 5

Viewing the next patient must NOT remove them.

Rule 6

The queue must never reorder itself because of search or UI filtering.

Rule 7

If the queue is empty, Serve Next must not crash.

Rule 8

The UI should always reflect the actual queue state.

24. Example Flow

The application should work like this:

Step 1

User adds:

P001 - Rahul


Queue:

FRONT → P001 ← REAR


Step 2

User adds:

P002 - Ankit


Queue:

FRONT → P001 → P002 ← REAR


Step 3

User adds:

P003 - Priya


Queue:

FRONT → P001 → P002 → P003 ← REAR


Step 4

User clicks:

Serve Next Patient

P001 is removed.

Queue becomes:

FRONT → P002 → P003 ← REAR


This clearly demonstrates:

FIFO — First In, First Out

25. Code Quality

Keep the code:

Clean

Modular

Beginner-friendly

Well commented

Easy to understand

Easy to demonstrate in a college presentation

Avoid:

Unnecessary libraries

Complex architecture

Over-engineering

Excessive animations

Complicated authentication

Unnecessary database systems

26. Visual Priority

The most important visual element should be the patient queue.

The user should immediately understand:

Who is currently waiting?

Who is next?

Who is at the front?

Who will be served next?

Make the FRONT and REAR positions very clear.

27. Final Goal

The final website should feel like a small but polished DSA project, not a large hospital management platform.

The main demonstration should be:

Patient Registration
        ↓
      ENQUEUE
        ↓
    Patient Queue
        ↓
       PEEK
        ↓
   Serve Next Patient
        ↓
      DEQUEUE
        ↓
  Served Patient History


The website should make it very easy for a student to explain:

“This project uses a Queue data structure to manage hospital patients. Patients are inserted at the rear using enqueue and removed from the front using dequeue, following the FIFO principle.”

Make the UI simple enough that the DSA concept remains the focus.
28. Multiple Patient Inputs and Data Storage

The application MUST support multiple patient inputs.

This is not a single-patient demo. Users should be able to continuously register new patients and build a real queue.

Multiple Patient Registration

The user should be able to submit the Register New Patient form repeatedly.

For example:

Patient 1 → Rahul
Patient 2 → Ankit
Patient 3 → Priya
Patient 4 → Arjun
Patient 5 → Sneha


After every submission, the patient should be added to the queue without deleting or replacing previously added patients.

The queue should maintain the exact order in which patients were added.

Example:

FRONT
  ↓
[P001 Rahul]
  ↓
[P002 Ankit]
  ↓
[P003 Priya]
  ↓
[P004 Arjun]
  ↓
[P005 Sneha]
  ↓
REAR


29. Patient Data Fields

Each patient should have a unique record containing:

Patient ID

Patient Name

Age

Gender

Department

Priority

Registration Time

Queue Position

Status

Example:

Patient ID: P001
Name: Rahul Kumar
Age: 21
Gender: Male
Department: General Medicine
Priority: Normal
Registration Time: 10:42 AM
Status: Waiting


30. Persistent Data

The application MUST save patient data.

Use localStorage for the basic version.

The following data should persist after refreshing or reopening the webpage:

Waiting Queue

Store all currently waiting patients.

Served Patients

Store patients who have already been served.

Statistics

Persist:

Total patients registered

Total patients served

Current waiting count

When the application starts, load the previously saved data automatically.

For example:

Before Refresh:

Waiting Queue:
P001
P002
P003

Served:
P000


After refreshing the browser:

Waiting Queue:
P001
P002
P003

Served:
P000


The data should NOT disappear.

31. Adding Many Patients

When the user submits multiple patients:

Add P001
Add P002
Add P003
Add P004
Add P005


The application should produce:

FRONT → P001 → P002 → P003 → P004 → P005 ← REAR


Do NOT replace the previous patient when a new patient is added.

Every patient must be stored as a separate object/record.

32. Queue Data Model

Use a patient object similar to:

Patient {
    id,
    name,
    age,
    gender,
    department,
    priority,
    registrationTime,
    status
}


Maintain a collection representing the queue.

The logical queue operations must be:

ENQUEUE → Add patient at REAR

DEQUEUE → Remove patient from FRONT

PEEK → View FRONT patient

SIZE → Number of waiting patients

ISEMPTY → Check whether queue is empty


33. Serve Multiple Patients

The user should also be able to repeatedly click:

Serve Next Patient

For example:

Initial queue:

P001 → P002 → P003 → P004 → P005


Click Serve Next:

P002 → P003 → P004 → P005


P001 moves to Served Patients History.

Click again:

P003 → P004 → P005


P002 moves to Served Patients History.

Continue this process until the queue becomes empty.

The served patient must NOT disappear permanently. It should be moved to the served history.

34. Registration Counter

Generate a unique Patient ID automatically.

For example:

P001
P002
P003
P004
...


The user should not have to manually enter the ID if possible.

However, still allow the ID to be displayed clearly in the UI.

Make sure duplicate IDs cannot occur.

If the page is refreshed, continue the numbering from the previous value.

35. Real-Time Queue Position

Every waiting patient should display their current queue position.

Example:

P001 — Rahul
Position: 1

P002 — Ankit
Position: 2

P003 — Priya
Position: 3


When P001 is served:

P002 — Ankit
Position: 1

P003 — Priya
Position: 2


Queue positions must automatically update.

36. Data Management

Add simple controls for managing stored data.

Include:

Clear Queue

Removes only patients who are currently waiting.

Do NOT automatically delete served history.

Also include:

Clear All Data

This should delete:

Waiting queue

Served history

Statistics

Patient ID counter

Show a confirmation dialog before performing this action:

Are you sure you want to delete all patient data? This action cannot be undone.

37. Search Stored Patients

Because multiple patients can be stored, provide a search field.

Allow searching by:

Patient ID

Patient Name

Department

Search results should show the patient's current status:

P004
Arjun Kumar
Department: Cardiology
Status: Waiting
Position: 3


or:

P002
Ankit
Department: Orthopedics
Status: Served


Searching must NOT modify the actual queue order.

38. Data Persistence Requirement

IMPORTANT:

Do not use temporary hardcoded patient data as the main implementation.

The application should start with an empty queue for a new user.

After the user enters data, that data becomes the actual application data.

Use:

localStorage


to persist the application state.

On page load:

Load saved data
       ↓
Restore queue
       ↓
Restore served history
       ↓
Restore statistics
       ↓
Render UI


When data changes:

User action
    ↓
Update queue
    ↓
Update UI
    ↓
Save updated state to localStorage


39. Important DSA Demonstration

The application should make it obvious that multiple stored patients are being managed using the Queue concept.

For example, after registering five patients:

             PATIENT QUEUE

FRONT                                      REAR
  ↓                                          ↓

┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│ P001 │→ │ P002 │→ │ P003 │→ │ P004 │→ │ P005 │
│Rahul │  │Ankit │  │Priya │  │Arjun │  │Sneha │
└──────┘  └──────┘  └──────┘  └──────┘  └──────┘

           5 PATIENTS WAITING


This should update dynamically as patients are added and served.

40. Final Functional Test

Before considering the project complete, make sure this exact sequence works:

Open the application.

Register 5 different patients.

Verify all 5 appear in the queue.

Verify the first patient is at FRONT.

Verify the fifth patient is at REAR.

Refresh the browser.

Verify all 5 patients are still present.

Click View Next Patient.

Verify the first patient is displayed but NOT removed.

Click Serve Next Patient.

Verify the first patient is removed from the queue.

Verify the first patient appears in Served History.

Verify the second patient becomes FRONT.

Add another patient.

Verify the new patient is added at REAR.

Refresh again.

Verify all updated data remains saved.

Search for a patient.

Verify searching does not change queue order.

Serve the remaining patients one by one.

Verify the queue eventually becomes empty.

Verify all served patients remain available in history.

The final result should be a working multi-patient queue management system with persistent data, while keeping the UI simple and keeping the C++ Queue/DSA concept as the main focus of the project.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://queue-mate-health.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7970c587-9439-4382-a159-4aee7edb4d60).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
