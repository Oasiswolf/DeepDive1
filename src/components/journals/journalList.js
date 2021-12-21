import React, { Component } from 'react';
import {JournalEntry} from"./journalEntry";

const rawJournalData = [
    {title: 'Post One', content: 'Post Content', status: "draft"},
    {title: 'Post Two', content: 'Post Content', status: "published"},
    {title: 'Post Three', content: 'Post Content', status: "published"},
    {title: 'Post Four', content: 'Post Content', status: "published"}
];

// class type component
export default class JournalList extends Component {
    constructor(props) {
        super();
        this.state = {
            journalData: rawJournalData,
            isOpen: true
        };

        this.clearEntries = this.clearEntries.bind(this)
        this.showAllEntries = this.showAllEntries.bind(this)
        this.toggleStatus = this.toggleStatus.bind(this)
    }

    
    clearEntries () {
        this.setState({ journalData: [], isOpen: false })
    };

    showAllEntries () {
        this.setState({ journalData: rawJournalData, isOpen:true})
    };
    
    toggleStatus () {
        if (this.state.isOpen){
            this.setState({journalData:[], isOpen:false})
        }else{
            this.setState({journalData: rawJournalData, isOpen:true})
        }
    };

    render() {
        const journalEntries = this.state.journalData.map(journals => {
            return (
                <div key={journals.title}>
                    <JournalEntry title={journals.title} content={journals.content} />
                </div>
            )
        })
        return(
            <div>
                <h2>{this.props.heading}</h2>
                {journalEntries}

                <button onClick={this.clearEntries}>Clear Journal Entries</button>
                <button onClick={this.showAllEntries}>Show Journal Entries</button>
                <button onClick={this.toggleStatus}>Toggle Status</button>
            </div>
        )
    }
}