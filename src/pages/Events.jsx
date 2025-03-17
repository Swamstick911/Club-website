import React from 'react';
import "./Events.css";
function Events () {
    return(
        <section>
            <div class="content">
                <h1>Events</h1>
                <h2>Learn, Build and Innovate!</h2>
                <p>Our Club hosts exciting events where you can build, code, and collaborate with like-minded enthusiasts. Stay tuned for these upcoming events!</p>
                <h2>Upcoming Events:</h2>
                <ol>
                    <li>Robotics Workshop
                        <ul>
                            <li>Date: TBD</li>
                            <li>Location: Methodist High School, Kanpur</li>
                            <li>Learn the basics of robotics and build your first project!</li>
                        </ul>
                    </li>
                    <li>AI & Automation Hackathon
                        <ul>
                            <li>Date: TBD</li>
                            <li>Location: TBD</li>
                            <li>Compete in a 24-hour coding challenge focused on AI-driven automation</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Events;