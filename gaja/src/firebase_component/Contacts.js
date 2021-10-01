import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";


const Contacts = () => {
    
    var [contactObjects, setContactObjects] =useState(0)

    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot => {
            if(snapshot.val()!=null)
            setContactObjects({
                ...snapshot.val()
            })
        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if(err)
                    console.log(err)
            }
        )
    }

    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Contacts;