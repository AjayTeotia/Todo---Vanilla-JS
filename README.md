# 📝 Todo - Vanilla JavaScript

A modern, feature-rich todo list application built with vanilla JavaScript, HTML, and CSS. Simple yet powerful task management with a beautiful purple-themed interface.

![Todo App Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow) ![CSS](https://img.shields.io/badge/CSS-Modern-blue)

## 🌟 Features

### ✨ Core Functionality
- **Add Tasks**: Quickly add new tasks with a simple input form
- **Mark Complete**: Toggle task completion with intuitive checkboxes
- **Delete Tasks**: Remove unwanted tasks with one click
- **Duplicate Prevention**: Smart system prevents duplicate tasks

### 📅 Smart Organization
- **Today's Tasks**: Focus on current day priorities
- **Yesterday's View**: Review previous day's accomplishments
- **Auto-Migration**: Old tasks automatically move to yesterday

### 🎲 Random Task Generator
Get unstuck with 19 curated task suggestions:
- 🏃‍♂️ Health & Wellness: "Do 15 push-ups", "Stretch for 10 minutes"
- 📚 Learning: "Read 10 pages of a book", "Learn a new word"
- 🧘‍♀️ Mindfulness: "Meditate for 5 minutes", "Practice deep breathing"
- 🗂️ Organization: "Clean your desk", "Organize files"

### 📊 Real-Time Analytics
- **Total Tasks**: Complete task count
- **Completed**: Finished tasks counter
- **Pending**: Remaining tasks tracker

## 🎨 Design Highlights

- **Modern Purple Theme**: Calming and productive color palette
- **Clean Interface**: Minimalist design focusing on functionality
- **Responsive Layout**: Works seamlessly across devices
- **Smooth Interactions**: Intuitive user experience with immediate feedback

## 🚀 Live Demo

[**Try the Live Application**](https://todo-vanilla-js-one.vercel.app/)

## 📋 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AjayTeotia/Todo---Vanilla-JS.git
   ```

2. **Navigate to project directory**
   ```bash
   cd Todo---Vanilla-JS
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   # or
   double-click index.html
   ```

### Alternative Setup
- Download the ZIP file from GitHub
- Extract and open `index.html` in any modern browser
- No server setup required!

## 💻 Usage

### Adding Tasks
1. Type your task in the "Add a task..." input field
2. Press Enter or click the checkmark button
3. Task appears in Today's section

### Managing Tasks
- **Complete**: Click the checkbox next to any task
- **Delete**: Click the "Delete" button on task cards
- **Random Task**: Click "🎲 Generate Random Task" for inspiration

### Data Persistence
- All tasks automatically save to your browser's local storage
- Data persists between browser sessions
- No account creation or internet connection required

## 🔧 Technical Details

### Built With
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox layout
- **Vanilla JavaScript**: Pure JS without frameworks
- **Local Storage API**: Client-side data persistence
- **Font Awesome**: Icon library for enhanced UI

### Project Structure
```
Todo---Vanilla-JS/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Core JavaScript functionality
└── README.md           # Project documentation
```

### Key Functions
```javascript
// Core functionality
addTask()              // Creates new tasks
toggleTask()           // Marks tasks complete/incomplete
deleteTask()           // Removes tasks
renderTasks()          # Updates the display
saveTasks()            # Persists to localStorage
```

## 🎯 Features Breakdown

### Smart Task Management
- **Duplicate Detection**: Prevents adding identical tasks on the same day
- **Date-Based Organization**: Automatically categorizes by today/yesterday
- **Task State Persistence**: Maintains completion status across sessions

### User Experience
- **Immediate Feedback**: Real-time updates for all actions
- **Visual Indicators**: Clear completion states with color coding
- **Empty State Messages**: Helpful prompts when no tasks exist

### Data Handling
- **JSON Storage**: Structured data format in localStorage
- **Date Formatting**: Consistent date handling across the application
- **State Management**: Efficient task state updates

## 🎨 UI/UX Design

### Color Palette
- **Primary Purple**: `#736ced` - Main theme color
- **Background Beige**: `#f2dfd7` - Warm, comfortable backdrop
- **Sidebar White**: `#fef9ff` - Clean sidebar background
- **Success Green**: `#00a843` - Completed task indicator

### Typography
- **Font Family**: Ysabeau Infant (Google Fonts)
- **Hierarchy**: Clear size differentiation for headings and body text
- **Readability**: Optimized contrast ratios


### Security Considerations
- Local storage only (no external data transmission)
- Input sanitization for XSS prevention
- No sensitive data handling required

