import React from "react";

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Your Massage</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your massage "></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Contact;