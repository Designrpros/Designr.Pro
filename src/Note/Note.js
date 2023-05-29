import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                { title: 'Note 1' },
                { title: 'Note 2' },
                { title: 'Note 3' },
                // Add more notes here
            ],
            isOpen: false, // Add this line
        };
    }

    handleNewNote = () => {
        console.log('New note');
        // Add logic for creating a new note
    }

    handleDeleteNote = () => {
        console.log('Delete note');
        // Add logic for deleting a note
    }

    toggleSidebar = () => { // Add this method
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        return (
            <div className="app">
                <Toolbar 
                    handleNewNote={this.handleNewNote} 
                    handleDeleteNote={this.handleDeleteNote} 
                    toggleSidebar={this.toggleSidebar} // Pass toggleSidebar as a prop
                />
                <Sidebar 
                    notes={this.state.notes} 
                    isOpen={this.state.isOpen} // Pass isOpen as a prop
                    toggleSidebar={this.toggleSidebar} // Pass toggleSidebar as a prop
                />
                {/* Render other components here */}
            </div>
        );
    }
}

export default App;
